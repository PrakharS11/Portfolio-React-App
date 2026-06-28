import React from 'react';
import aboutPic from "../../Resources/Images/aboutPic2.jpg"
import "./styles/About.css";

function About() {

    const getAboutContent = () => {
        return (
            <section className="portfolio-about-content-wrapper">
                <h2>About This Portfolio</h2>
                <p>This portfolio was built using React.js and showcases a collection of mini-projects developed during my college years — a digital clock, a todo app, Scarne's Dice game, and a live quote generator. It reflects my interest in frontend development alongside my core work as a Data Engineer. The site is deployed on Firebase and features a fully interactive resume page.</p>
                <a target="_blank" rel="noreferrer" href="https://inspiring-roentgen-5fa24e.netlify.app/">Visit Website</a>
            </section>
        )
    }

    const getAboutBody = () => {
        return (
            <section className="portfolio-about-body-wrapper">
                {getAboutContent()}
                 <img src={aboutPic} alt="description" />
            </section>
        )
    }

  return <section id="portfolio-about-wrapper">
        <h1>About</h1>
        {getAboutBody()}
      </section>;
}

export default About;
