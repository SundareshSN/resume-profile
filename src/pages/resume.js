import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Resume = () => {
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    // Replace with your file path or fetch logic
    fetch("/Milind_Kulgod_Resume.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setFileUrl(url);
      })
      .catch((error) => console.error("Error fetching file:", error));
  }, []);

  const handleDownload = () => {
    if (fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "Milind_Resume.pdf"; // Replace with desired filename
      link.click();
      URL.revokeObjectURL(fileUrl);
    }
  };
  return (
    <section id="resume" style={{ "margin-bottom": "-120px" }}>
      <Container>
        <h2 className="display-5 text-dark">My Resume</h2>
        <p className="lead text-muted" style={{ "text-align": "justify" }}>
          As a skilled software developer with a strong academic background, I
          have a proven track record of designing and implementing efficient
          solutions. My expertise in various programming languages, frameworks,
          and technologies, combined with my knowledge of machine learning and
          cloud computing, allows me to deliver high-quality results. Throughout
          my career, I have successfully contributed to projects ranging from
          employee management systems to network optimization. My ability to
          troubleshoot complex technical issues and develop innovative solutions
          has been instrumental in achieving project goals. I am passionate
          about continuous learning and staying up-to-date with the latest
          advancements in technology. My certifications in machine learning and
          cloud computing demonstrate my commitment to professional development.
          I am confident in my ability to contribute meaningfully to any team
          and am eager to take on new challenges in my career.
        </p>

        <p className="lead text-muted" style={{ "text-align": "justify" }}>
          Click here to download my resume!
        </p>
        <Button
          onClick={handleDownload}
          className="btn-custom"
          style={{ backgroundColor: "black", color: "white", border: "none" }}
        >
          Download Resume
        </Button>
      </Container>
    </section>
  );
};

export default Resume;
