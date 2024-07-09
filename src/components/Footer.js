import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Image Citation: Image created by me in Caanva https://www.canva.com
import longLogo from ".././assets/images/LogoBBTLong.png";
// Image Citation: Image from GitHub brand assets
import gitHubLogo from ".././assets/images/github-mark-white.png";
// Image Citation: Image from LinkedIn Brand Assets
import linkedinLogo from ".././assets/images/In-White-48.png";

import './Footer.css';


// Footer Component

function Footer() 
    { 
        // Social Media Contacts
        const socialMedia = [
            {
                image: gitHubLogo,
                link: 'https://github.com/bbthompson',
                altText: 'GitHub'
            },
            {
                image: linkedinLogo,
                link: 'https://www.linkedin.com/in/brian-thompson-71323a21a/',
                altText: 'LinkedIn'
            },
        ];


        // Populate the social Media Links
        const socialMediaItems = socialMedia.map((socialMediaItem, index) => {
            return (
                <a key={index} className="mx-1" href={socialMediaItem.link} target="_blank" rel="noreferrer"><Image src={socialMediaItem.image} width="48px" height="48px"  alt={socialMediaItem.altText}></Image></a>
            );
        });
        
        return ( 

            <footer>
                <Container fluid g-0 className="py-4">
                    <Row g-0 className="justify-content-center align-items-center text-center">
                        <Col md={4} className="mb-3 text-center">
                            <a href="#Home"><Image fluid mx-auto src={longLogo} className="w-50" alt="BBT Logo"></Image></a>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h4>Contact Me:</h4>
                            <p className="py-0 my-0 mb-2"><a className="white-link py-0 my-0" href="mailto:bbthompson@my.waketech.edu">bbthompson@my.waketech.edu</a></p>
                            {socialMediaItems}
                        </Col>
                        <Col md={4} mx-auto className="mb-3">
                            <p className="py-0 my-0">&copy; Copyright 2024.</p>
                            <p>All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
    
        ); 
} 
    
export default Footer;