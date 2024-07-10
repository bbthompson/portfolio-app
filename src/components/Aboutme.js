import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// Image Citation: Photo taken of me by family member
import photoBrian from ".././assets/images/photoBrian.jpg";

import './AboutMe.css';

//About Me Component

function AboutMe() {
    return (
        <section>
            <Container fluid className="about-background py-4">
                <h2 id="About" className="text-center text-shadow py-3">About Me</h2>
                <Row g-0 className='about-spacing'>
                    <Card className="mb-2">
                        <Row g-0 className="py-2 align-items-center justify-content-center">
                            <div className="d-md-none px-2 text-center">
                                <Image src={photoBrian} rounded mx-auto fluid alt="Brian Thompson"></Image>                 
                            </div>
                            <Col xs={12} md={5} lg={6}>
                                <Card.Body className="mx-2">
                                    <Card.Title className="emphasize-text pb-2">Hi, I'm Brian. </Card.Title>
                                    <Card.Text>I am a USA Swimming Club Assistant Coach, competitive swimming athlete,
                                        and an aspiring web developer.
                                    </Card.Text>
                                    <Card.Text>I am working towards my AAS degree in Web Development at Wake Tech Community College. 
                                        In my college courses, I am gaining technical skills in web development and design. 
                                        In this pursuit, I have discovered my passion for developing robust websites that embody 
                                        the principles of user-focused, accessible, and responsive design.
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col md={7} lg={6} className="d-none d-md-block text-center">
                                <Image src={photoBrian} fluid rounded className="mx-auto" alt="Brian Thompson"></Image>
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </Container>
        </section>
    );
}
  
export default AboutMe;