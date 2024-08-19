import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <section id="home">
      <Container>
        <h1 className="display-4 text-dark">Welcome to My Portfolio</h1>
        <p className="lead text-muted">Hi, I'm Milind Kulgod. A passionate developer focused on delivering impactful solutions...</p>
      </Container>
    </section>
  );
};

export default Home;
