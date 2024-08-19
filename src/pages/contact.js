import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <h2 className="text-dark">Contact Me</h2>
        <p className="text-muted">Reach out to me using the form below:</p>
        <Form>
          <Form.Group controlId="formName">
            <Form.Control type="text" placeholder="Your Name" className="text-light" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control type="email" placeholder="Your Email" className="text-light" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Control as="textarea" rows={4} placeholder="Your Message" className="text-light" />
          </Form.Group>
          <Button type="submit" className="btn-custom">Send</Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
