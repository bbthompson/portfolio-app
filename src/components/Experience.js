import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import "./Experience.css";

// Image Citation: Pexels - https://www.pexels.com/photo/data-codes-through-eyeglasses-577585/
import glasses from ".././assets/images/glasses.jpg";

// Experience Component

function Experience(props) {

    // Populate the Soft Skills List Items
    const softSkillsItems = props.softSkills.map((softSkill, index)=>{
        return <li key={index}>{softSkill}</li>;
    });

    // Populate the Technical Skill List Itmes
    const technicalSkillsItems = props.technicalSkills.map((technicalSkill, index)=>{
        return <li key={index}>{technicalSkill}</li>;
    });

     return ( 

        <section>
            <Container fluid className="experience-background py-4">
                <h2 id="Experience" className="text-center text-shadow py-3">Experience</h2>
                <Row g-0 className="experience-spacing">
                    <Card className="mb-2">
                        <Row g-0 className="align-items-center py-2">
                            <Col md={7} lg={6} className="d-none d-md-block text-center">
                                <Image src={glasses} fluid rounded mx-auto alt="Glasses in front of Computer"></Image>
                            </Col>
                            <Col md={5} lg={6}>
                                <Card.Body className='mx-2'>
                                    <Card.Title className='bold-text'>Web Development</Card.Title>
                                    <Card.Text>I am enrolled in the AAS Web Development AAS degree program at Wake Tech Community College in Raleigh, NC. In my college courses, I am gaining technical skills in web development and design 
                                    including HTML, CSS, and JavaScript. I have also taken courses in Python, Oracle SQL, C#, networking, project management, 
                                    the MERN stack, and UX Design.</Card.Text>
                                    <Card.Title className='bold-text pt-2'>Coaching</Card.Title>
                                    <Card.Text>When I am not behind my laptop screen, I am working on my soft skills at the pool as 
                                        both a competitive athlete and a USA Swimming Club coach for the TAC Titans Swim Team in Cary, NC.</Card.Text>

                                </Card.Body>
                            </Col>
                            <div className="d-md-none text-center px-2">
                                <Image src={glasses} fluid rounded mx-auto alt="Glasses in front of Computer"></Image>
                            </div>
                        </Row>
                        <hr className='bold-text'></hr>
                        <Row className="align-items-center justify-content-center">
                            <Col md={6} className='text-center'>
                                <h5 className='bold-text'>Soft Skills</h5>
                                <ul className='skillsList'>
                                    {softSkillsItems}
                                </ul>
                            </Col>
                            <Col md={6} className='text-center'>
                                <h5 className='bold-text'>Technical Skills</h5>
                                <ul className='skillsList'>
                                    {technicalSkillsItems}
                                </ul>
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </Container> 
        </section>
    ); 
} 
    
export default Experience;