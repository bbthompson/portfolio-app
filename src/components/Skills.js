import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Skills.css';

// Skills Component

function Skills(props) {

    // Populate the Skills Images
    const technicalSkillIcons = props.skills.map((technicalSkill, index) => {
        return (
            <Col sm={6} md={3} className="pb-3 pb-md-0">
                <Image key={index} src={technicalSkill.image} fluid rounded mx-auto alt={technicalSkill.name}></Image>
            </Col>
        );
    });

    return (      
        <Container fluid className="skills-background py-4">
            <h2 id="Skills" className="text-shadow text-center ps-2 ps-md-5">Skills</h2>
            <Row className="py-3 justify-content-around text-center">
                {technicalSkillIcons}
            </Row>
        </Container>

  
    );
  }
  
  export default Skills;