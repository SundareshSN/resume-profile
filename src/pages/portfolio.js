import React from 'react';
import { Container } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <h2 className="text-dark">My Projects</h2>
        <p className="text-muted">Here are some of the key projects I've worked on:</p>
        {/* Add project details, cards, or descriptions here */}
      </Container>
    </section>
  );
};

export default Portfolio;
