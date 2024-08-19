import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/homepage';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
