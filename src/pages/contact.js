import React, { useState, useEffect } from 'react';
import { Container, Button, Form, Alert } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import emailjs from 'emailjs-com';
import 'react-phone-input-2/lib/style.css';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [showAlert, setShowAlert] = useState(false);

    // Check if all fields are filled
    useEffect(() => {
        const { name, email, phone, message } = formData;
        const isFormFilled = name && email && phone && message;
        setIsButtonDisabled(!isFormFilled);
    }, [formData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            ...formData,
            from_name: "Milind's Portfolio",
        };

        emailjs.send(
            'service_portfolio',
            'template_portfolio',
            templateParams,
            'OTtJ9uxTwLZi5tazk'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            })
            .catch((err) => {
                console.error('Failed to send message:', err);
                alert('Failed to send message, please try again later.');
            });

        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section id="contact" style={{'marginTop': '-130px'}}>
            <Container>
                <h2 className="display-6 text-dark">Contact Me</h2>
                <p className="text-muted">Reach out to me using the form below. Yes, I will receive an email!</p>

                {showAlert && (
                    <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                        Message received! I'll get back to you soon.
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Name"
                            width={100}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formMessage">
                    <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="textarea-field"
                    />
                </Form.Group>
                    <Form.Group controlId="formPhone">
                        <PhoneInput
                            country={'us'}
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            placeholder="Your Phone Number"
                            required
                        />
                    </Form.Group>
                    <p></p>
                    <Button type="submit" className="btn-custom" style={{ backgroundColor: 'black', color: 'white', border: 'none' }} disabled={isButtonDisabled}>
                        Send
                    </Button>
                </Form>
            </Container>
        </section>
    );
};

export default Contact;
