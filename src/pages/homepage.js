import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SkillSection from "../components/skillsection";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const YearsAndMonths = () => {
    const startDate = new Date("2021-08-09");
    const endDate = new Date();
    const timeDiff = endDate.getTime() - startDate.getTime();
    const days = Math.floor(timeDiff / (1000 * 3600 * 24));

    const years = Math.floor(days / 365);
    const remainingDays = days % 365;
    const months = Math.floor(remainingDays / 30);

    let totalMonths = years * 12 + months;
    let displayYears = Math.floor(totalMonths / 12);
    let displayMonths = totalMonths % 12;
    if (displayMonths === 0) {
      return `${displayYears} years`;
    }
    return `${displayYears} years and ${displayMonths} month${
      displayMonths === 1 ? "" : "s"
    }`;
  };

  return (
    <section id="home">
      <Container style={{ "text-align": "justify" }}>
        <img
          src="_DSC0356.jpeg"
          alt="Milind Kulgod"
          style={{
            width: isHovered ? "300px" : "160px",
            height: isHovered ? "420px" : "232px",
            borderRadius: "5%",
            marginLeft: "60px",
            float: "right",
            transition: "all 0.3s ease-in-out", // smooth transition
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <h1 className="display-4 text-dark">Hello there!</h1>
        <p className="lead text-muted">
          I'm Sundaresh Shankar Narayan.
        </p>
        <p className="lead text-muted">
          With {YearsAndMonths()} of experience and keen interest and
          proficiency in Data Analysis, Machine Learning and Full Stack
          Development, I come with a versatile palette of skills and
          technologies, leveraging them to drive strategic decision-making and
          optimize business outcomes.
        </p>
        <br />
        <h2 className="display-5 text-dark">Education</h2>
        <p className="lead text-muted">
          <b>Master of Science</b>:
        </p>
        <p className="lead text-muted">
          Computer Science and Engineering, University of Texas at Arlington,
          Arlington, TX, USA - 76013
        </p>
        <p className="lead text-muted">
          <b>Bachelor of Engineering</b>:
        </p>
        <p className="lead text-muted">
          Information Science and Engineering, Nitte Meenakshi Institute of
          Technology, Bengaluru, Karnataka, India - 560064
        </p>
        <br />
        <h2 className="display-5 text-dark">Experience</h2>
        <p className="lead text-muted">
          <b>Software Developer </b>(Jan '24 - Present) -{" "}
          <i>ITVision360 Inc, Irving, TX, USA</i>
        </p>
        <p className="lead text-muted">
          <b>Software Developer </b>(Aug '21 - Jan '24) -{" "}
          <i>Tata Consultancy Services, Irving, TX, USA</i>
        </p>
        <p className="lead text-muted">
          <b>Software Developer Intern </b>(June '18 - Aug '18) -{" "}
          <i>Quess Corp Limited, Bengaluru, KA, IN</i>
        </p>
        <br />
        <h2 className="display-5 text-dark">Skills and Languages</h2>
        <div>
          <SkillSection />
        </div>
      </Container>
    </section>
  );
};

export default Home;
