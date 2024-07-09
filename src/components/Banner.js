import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Banner.css';

// Image Citation: Created by me in Canva using AI Text to Image feature 'Computer Programmer with Glasses' (https://www.canva.com)
import watercolorBrian from ".././assets/images/watercolorBrian.png";

// Banner Component

function Banner() {

    return ( 
        <Container fluid>
            <Row className="align-items-center justify-content-center header-background py-4">
                <Col className="pb-3 pb-md-0 text-center col-auto">
                    <Image src={watercolorBrian} fluid rounded alt="Watercolor Brian Thompson"></Image>
                </Col>
                <Col className="col-auto text-center">
                    <h1 className="white-shadow">Brian Thompson</h1>
                    <h3>Aspiring Web Developer</h3>
                </Col>
            </Row>
        </Container>
    ); 
} 
    
export default Banner;