import React, { useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  const navbarToggleRef = useRef(null);

  const handleNavLinkClick = () => {
    console.log("Check here",navbarToggleRef)
    if (navbarToggleRef.current) {
      navbarToggleRef.current.click(); // Simulate a click to close the dropdown
    }
  };

  return (
    <Navbar expand="lg" className="navbar" fixed="top">
      <Navbar.Brand href="#home" className="text-light">Milind Kulgod</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" ref={navbarToggleRef} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="nav-link" onClick={handleNavLinkClick}>Home</Nav.Link>
          <Nav.Link href="#resume" className="nav-link" onClick={handleNavLinkClick}>Resume</Nav.Link>
          <Nav.Link href="#portfolio" className="nav-link" onClick={handleNavLinkClick}>Portfolio</Nav.Link>
          <Nav.Link href="#contact" className="nav-link" onClick={handleNavLinkClick}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
