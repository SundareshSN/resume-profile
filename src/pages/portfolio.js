import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.txt')
      .then(response => response.text())
      .then(data => {
        const projectList = data.trim().split('\n\n').map(project => {
          const lines = project.split('\n');
          const title = lines[0]; // Project title
          const details = lines.slice(1); // Project details
          return { title, details };
        });
        setProjects(projectList);
      });
  }, []);
  return (
    <section id="portfolio" style={{'text-align':'justify'}}>
      <Container>
        <h2 className="display-6 text-dark">My Projects</h2>
        <p className="lead text-muted">Here are some of the projects I've worked on:</p>
        <p className="lead text-muted">
          {projects.map((project, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h3 className='text-dark'>{project.title}</h3>
              <ul>
                {project.details.map((detail, i) => (
                  <li key={i}>{detail.slice(2)}</li>
                ))}
              </ul>
            </div>
          ))}
        </p>
      </Container>
    </section>
  );
};

export default Portfolio;
