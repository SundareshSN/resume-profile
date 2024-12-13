import React, { useEffect, useState, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import './chatbot.css'


const Chatbot = () => {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef(null);
    const [profileInfo, setProfileInfo] = useState('');

    useEffect(() => {
        fetch('/rules.txt')
            .then((response) => response.text())
            .then((data) => {
                setProfileInfo(data); // Store the fetched data in the state
            })
            .catch((error) => {
                console.error('Error fetching the file:', error);
            });
    }, []);

    const genAI = new GoogleGenerativeAI("AIzaSyBCR5V57cnvWX6W92s4_WnM6piYpAzykmo");
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
        systemInstruction: profileInfo,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim() === "") return;

        const userMessage = { role: "user", content: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");

        try {
            const chat = model.startChat({
                history: messages.map((msg) => ({
                    role: msg.role,
                    parts: [{ text: msg.content }],
                }))
            });

            const result = await chat.sendMessageStream(input);

            let botMessageContent = "";
            for await (const chunk of result.stream) {
                botMessageContent += chunk.text();
                setMessages((prevMessages) => {
                    const updatedMessages = [...prevMessages];
                    const lastMessage = updatedMessages[updatedMessages.length - 1];
                    if (lastMessage && lastMessage.role === "model") {
                        lastMessage.content = botMessageContent;
                    } else {
                        updatedMessages.push({ role: "model", content: botMessageContent });
                    }
                    return updatedMessages;
                });
            }
        } catch (error) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { role: "model", content: "The message could not be sent. Please try again." },
            ]);
        }

        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="chatbot-wrapper">
            {isOpen ? (
                <div className="chatbot-container">
                    <div className="chatbot-header">
                        <h1 className="chatbot-title">Ask Linda</h1>
                        <button
                            className="chatbot-close-button"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((message, index) => (
                            <div key={index} className={`chatbot-message ${message.role}`}>
                                <strong>{message.role === 'user' ? 'You' : 'Linda'}: </strong>
                                {message.isCodeBlock ? (
                                    <pre className="code-block">
                                        <code>{message.content.slice(3, -3)}</code>
                                    </pre>
                                ) : (
                                    <span>{message.content}</span>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleSubmit} className="chatbot-form">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="chatbot-input"
                            placeholder="Type your message..."
                        />
                    </form>
                </div>
            ) : (
                <div className="chatbot-bubble" onClick={() => setIsOpen(true)}>
                    <span role="img" aria-label="Chat Icon">💬 Ask Linda</span>
                </div>
            )}
        </div>
    );
};

export default Chatbot;