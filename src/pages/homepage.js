import React from 'react';
import { Container } from 'react-bootstrap';
import SkillSection from '../components/skillsection';

const Home = () => {
  return (
    <section id="home">
      <Container style={{ 'text-align': 'justify' }}>
        <h1 className="display-4 text-dark">Hello there!</h1>
        <p className="lead text-muted">I'm Milind Kulgod. A passionate developer focused on delivering impactful solutions.</p>
        <p className="lead text-muted">With keen interest and proficiency in Data Analysis, Machine Learning and Full Stack Development, I come with a versatile palette of skills and technologies, leveraging them to drive strategic decision-making and optimize business outcomes.</p>
        <br/>
        <h2 className="display-6 text-dark">Education</h2>
        <p className="lead text-muted"><b>Master of Science</b>:</p>
        <p className="lead text-muted">Computer Science and Engineering, University of Texas at Arlington, Arlington, TX, USA - 76013</p>
        <p className="lead text-muted"><b>Bachelor of Engineering</b>:</p>
        <p className="lead text-muted">Information Science and Engineering, Nitte Meenakshi Institute of Technology, Bengaluru, Karnataka, India - 560064</p>
        <br/>
        <h2 className="display-6 text-dark">Skills and Languages</h2>
        <div>
          <SkillSection />
        </div>
      </Container>
    </section>
  );
};

export default Home;
