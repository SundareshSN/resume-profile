import React from "react";
import Navbar from "./components/navbar";
import Chatbot from "./components/chatbot";
import Footer from "./components/footer";
import Home from "./pages/homepage";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Resume />
      <Portfolio />
      <Contact />
      {/* <Chatbot /> */} /* Chatbot temporarily disabled */
      <Footer />
    </div>
  );
}

export default App;
