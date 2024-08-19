import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Resume = () => {
    const [fileUrl, setFileUrl] = useState(null);

    useEffect(() => {
        // Replace with your file path or fetch logic
        fetch('/Milind_Kulgod_Resume.pdf')
            .then(response => response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setFileUrl(url);
            })
            .catch(error => console.error('Error fetching file:', error));
    }, []);

    const handleDownload = () => {
        if (fileUrl) {
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = 'Milind_Resume.pdf'; // Replace with desired filename
            link.click();
            URL.revokeObjectURL(fileUrl);
        }
    }
    return (
        <section id="resume">
            <Container>
                <h2 className="text-dark">My Resume</h2>
                <p className="text-muted">Explore my work experience, education, skills, and certifications below...</p>
                <Button onClick={handleDownload} className="btn-custom">
                    Download Resume
                </Button>
            </Container>
        </section>
    );
};

export default Resume;
