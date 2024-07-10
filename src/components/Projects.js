import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import './Project.css';

// Projects Component 

function Projects(props) { 

    // populate the project cards
    const websiteProjects = props.projects.map((websiteProject, index) => {
        return (
            <Card className="mx-2">
                <Card.Img variant="top" src={websiteProject.image} alt={websiteProject.title}></Card.Img>
                <Card.Body>
                    <Card.Title className="bolder-text">{websiteProject.title}</Card.Title>
                    <Card.Text className="bolder-text">{websiteProject.date}</Card.Text>
                    <Card.Text><span className="bolder-text">Project Details: </span>{websiteProject.description}</Card.Text>
                    <Card.Text><span className="bolder-text">Skills: </span><small>{websiteProject.skills}</small></Card.Text>
                    <Button href={websiteProject.url} target="_blank" rel="noreferrer" className="navy-button">{websiteProject.title}</Button>
                </Card.Body>
            </Card>
        );
    });
        

        
    return ( 

        <Container fluid className="py-4 project-background">
            <h2 id="Projects" className="text-center text-shadow py-3">Projects</h2>
            <Row className="g-1 px-lg-4">
                <CardGroup>
                    {websiteProjects}
                </CardGroup>
            </Row>
         </Container>
    ); 
} 
    
export default Projects;