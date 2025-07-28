import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.txt")
      .then((response) => response.text())
      .then((data) => {
        const projectBlocks = data.trim().split(/\n\s*\n/);
        const projectList = projectBlocks.map((block) => {
          const lines = block.split("\n").filter((line) => line.trim() !== "");
          const title = lines[0].replace(/^[-\s]*/, "");
          const details = lines
            .slice(1)
            .filter((line) => line.startsWith("- "));
          return { title, details };
        });
        setProjects(projectList);
      });
  }, []);

  return (
    <section id="portfolio" style={{ marginBottom: "-120px" }}>
      <Container>
        <h2 className="display-5 text-dark">My Projects</h2>
        <p className="lead text-muted" style={{ textAlign: "justify" }}>
          Here are some of the projects I've worked on:
        </p>
        <div>
          {projects.map((project, index) => (
            <div key={index} style={{ marginBottom: "32px" }}>
              <h8 className="display-6 text-dark">{project.title}</h8>
              <ul>
                {project.details.map((detail, i) => (
                  <li
                    key={i}
                    className="lead text-muted"
                    style={{ textAlign: "justify" }}
                  >
                    {detail.replace(/^- /, "")}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
