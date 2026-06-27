import React from 'react';
import aboutPic from "../../Resources/Images/aboutPic2.jpg"
import "./styles/About.css";

function About() {

    const getAboutContent = () => {
        return (
            <section className="portfolio-about-content-wrapper">
                <h2>All about this portfolio website</h2>
                <p>Hi, I’m Prakhar Srivastava, a Data Engineering and Governance Analyst with interest in SQL, ETL pipelines, data validation, automation, and web development. 
                    I enjoy building practical projects that improve usability and solve real-world problems.</p>
                <a target="_blank" rel="noreferrer" href="https://inspiring-roentgen-5fa24e.netlify.app/" >Visit Website</a>
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
