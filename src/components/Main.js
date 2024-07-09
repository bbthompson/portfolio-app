import React from 'react';
import AboutMe from "./Aboutme";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";

// Image Citation: Unsplash - https://unsplash.com/photos/a-dog-and-a-cat-laying-in-the-grass-ouo1hbizWwo
import petsittingWebsite from ".././assets/images/petsittingWebsite.jpg";
// Image Citation: Pexels - https://www.pexels.com/photo/woman-in-white-hijab-standing-beside-green-plants-5561352/
import gardencenterWebsite from ".././assets/images/gardencenterWebsite.jpg";
//Image Citation: Unsplash - https://unsplash.com/photos/two-brown-wooden-folding-chairs-on-beach-during-daytime-Wx0u8dYX_y0
import beachWebsite from ".././assets/images/beachWebsite.jpg";

// Image Citations: Images created by me in Canva https://www.canva.com
import skillSQL from ".././assets/images/SQL.png";
import skillJavaScript from ".././assets/images/JavaScript.png";
import skillCSS from ".././assets/images/CSS.png";
import skillHTML from ".././assets/images/HTML.png";


// Portfolio Object (projects, skills, and soft skills properties)
const portfolio = {
    projects: [
        {
            title: 'Ark Angels Pet Care',
            date: 'Spring 2024',
            description: 'Website redesign for a family-owned pet sitting company, Ark Angles Pet Care. Website designed with a mobile-first responsive approach with a focus on target audience - pet owners in need of pet care while they are away from their home.',
            skills: 'HTML, CSS, Bootstrap, Mobile-First Responsive Design, Custom Redesign',
            url: 'https://wcet.waketech.edu/bbthompson/WEB125/arkangelspetcare/index.html',
            image: petsittingWebsite,
        },
        {
            title: 'Sprout & Grow',
            date: 'Fall 2023',
            description: 'Responsive website designed for fictional customer, Sprout & Grow. Design and content curated towards client’s commitment to both sustainable gardening practices and the development of partnerships within the local Raleigh community.',
            skills: 'HTML, CSS, Flexbox, Responsive Design, Customer/User Focused Design',
            url: 'https://wcet.waketech.edu/bbthompson/WEB140/project/index.html',
            image: gardencenterWebsite,
        },
        {
            title: 'Topsail Beach',
            date: 'Spring 2024',
            description: 'Website redesign of the visitor guide section of the town of Topsail Beach’s website. Website designed with a focus on responsive design for all viewport sizes and content catered to Topsail Beach’s target audience – families and couples.',
            skills: 'HTML, CSS, Bootstrap, Responsive Design, Customer/User Focused Design',
            url: 'https://wcet.waketech.edu/bbthompson/WEB125/lesson12/index.html',
            image: beachWebsite,
        },
    ],
    skills : [
        {
            image: skillHTML,
            name: 'HTML',
        },
        {
            image: skillCSS,
            name: 'CSS',
        },
        {
            image: skillJavaScript,
            name: 'JavaScript',
        },
        {
            image: skillSQL,
            name: 'SQL,'
        },
    ],
    softSkills : ["Time Management", "Leadership", "Communication", "Problem Solving", "Creativity", "Adaptability"],
    technicalSkills: ["HTML", "CSS", "JavaScript", "C#", "Python", "SQL"],
};

// Main Component 

function Main() {
    return (
        <main>
            <AboutMe />
            <Projects projects={portfolio.projects} />
            <Skills skills = {portfolio.skills} />
            <Experience softSkills = {portfolio.softSkills} technicalSkills={portfolio.technicalSkills} />
        </main>
    );
}


export default Main;