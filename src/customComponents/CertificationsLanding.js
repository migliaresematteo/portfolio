import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

function Certificates() {
    const certificates = [
        { id: 1, title: "CISCO CCNAv7", subtitle: "Introduction to Networks", description: "Learn the basics of networking including OSI model, TCP/IP, subnetting, and more.", icon: <FontAwesomeIcon icon={faNetworkWired} /> },
        { id: 2, title: "CISCO IoT", subtitle: "Introduction to IoT", description: "Explore the fundamentals of the Internet of Things including IoT devices, protocols, and applications.", icon: <FontAwesomeIcon icon={faGlobe} /> },
        { id: 3, title: "CISCO CyberSecurity", subtitle: "Introduction to Cybersecurity", description: "Understand key cybersecurity concepts such as threats, vulnerabilities, cryptography, and network security.", icon: <FontAwesomeIcon icon={faShieldHalved} /> },
        { id: 4, title: "HackersGen", subtitle: "Complete Linux/Ubuntu course", description: "Master Linux/Ubuntu operating system, command line, file system, and shell scripting.", icon: <FontAwesomeIcon icon={faTerminal} /> },
    ];

    return (
        <Container>
            <Row id='certifications' className="px-2 my-5">
            <h6 data-aos="fade-up" className="px-0 mx-2 display-6 fw-bolder underline w-max mb-4">My certifications</h6>
            <p data-aos="fade-up" className='px-0 mx-2 mb-4 lead'>Over the years, I have taken several exams aimed at earning useful certifications in different fields and you can find some of them below!</p>
            {certificates.map((certificate) => (
                <Col key={certificate.id} lg={3} md={6} className="mb-3 px-2">
                    <Card data-aos="fade-up" style={{ height: "100%" }}>
                        <div className='bg-dark text-light py-2 px-3 fw-bold'>{certificate.icon} {certificate.title}</div>
                        <Card.Body>
                            <Card.Title>{certificate.subtitle}</Card.Title>
                            <Card.Text>{certificate.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>
    );
}

export default Certificates;
