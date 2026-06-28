import React from 'react';
import { LinkedinFilled, GithubFilled, FacebookFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

function Footer() {

    const getResumeCTA = () => {
        return (
            <section className="resume-CTA footer-resume-CTA">
                <Link className="resume-link" to="resume">Resume</Link>
            </section>
        )
    }

    const getFooterContent = () => {
        return (
            <section className="portfolio-footer-content-wrapper">
                <section className="portfolio-footer-message-wrapper">
                    <h1>Let's Talk</h1>
                    <p>I'm always open to new opportunities, collaborations, or just a good conversation about tech and data. Feel free to reach out — I'd love to connect! <a href="mailto:prakharsahai21@gmail.com">Contact me</a></p>
                </section>
                    <section className="portfolio-intro-card-social-wrapper">
                        <LinkedinFilled style={{fontSize:"30px", color:"#F9F3F3"}} onClick={() => window.open("https://www.linkedin.com/in/prakhar-srivastava-47484a153/", "_blank")} />
                        <GithubFilled style={{fontSize:"30px", color:"#F9F3F3"}} onClick={() => window.open("https://github.com/PrakharS11", "_blank")}/>
                        <FacebookFilled style={{fontSize:"30px", color:"#F9F3F3"}}/>
                    </section>
            </section>
        )
    }

    return (
        <section className="portfolio-footer-wrapper">
            {getResumeCTA()}
            {getFooterContent()}
        </section>
    )
}

export default Footer;
