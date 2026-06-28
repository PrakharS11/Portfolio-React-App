import React from 'react';
import profilePic from "../../Resources/Images/dic6.PNG";
import emailIcon from "../../Resources/Images/emailIcon.svg";
import phoneIcon from "../../Resources/Images/phoneIcon.svg";
import linkedInIcon from "../../Resources/Images/linkedInIcon.svg";
import githubIcon from "../../Resources/Images/githubIcon.svg";
import { Rate } from 'antd';
import {CopyTwoTone} from '@ant-design/icons'
//import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import "./styles/ResumeBasicDetails.css";


function ResumeBasicDetails() {
    const getIdentity = () => {
        return (
            <section className="resume-basic-details-identity-wrapper">
                <img src={profilePic} alt="discription" />
                <h2>Prakhar Srivastava</h2>
            </section>
        )
    }

    const getAbout = () => {
        return (
            <section className="resume-basic-details-about-wrapper">
                <h3>About</h3>
                <p>Data Engineer with 3 years of experience at Accenture, building and maintaining large-scale data pipelines and governance frameworks. B.Tech in Computer Science from Lovely Professional University.</p>
            </section>
        )
    }

    const getContact = () => {
        return (
            <section className="resume-basic-details-contact-wrapper">
                <h3>Connect with me</h3>
                <section className="resume-basic-details-connect-container">
                <section className="resume-basic-details-connect-wrapper">
                    <img src={emailIcon} alt="email" />
                    <p>prakharsahai21@gmail.com</p>
                    <CopyTwoTone onClick={() => {navigator.clipboard.writeText("prakharsahai21@gmail.com")}}/>
                </section>
                <section className="resume-basic-details-connect-wrapper">
                    <img src={phoneIcon} alt="phone" />
                    <p>+91-1234567890</p>
                </section>
                <section onClick={()=>{window.open("https://www.linkedin.com/in/prakhar-srivastava-47484a153/","_blank")}} className="resume-basic-details-connect-wrapper">
                    <img src={linkedInIcon} alt="linkedIn" />
                    <p>LinkedIn</p>
                </section>
                <section onClick={()=>{window.open("https://github.com/PrakharS11","_blank")}} className="resume-basic-details-connect-wrapper">
                    <img src={githubIcon} alt="github" />
                    <p>Github</p>
                </section>
                </section>
            </section>
        )
    }

    const getSkills = () => {
        return (
            <section className="resume-basic-details-skills-wrapper">
                <h3>Skills</h3>
                <section>
                    <h4>Data Engineering</h4>
                    <Rate className="resume-basic-details-skills-star" allowHalf defaultValue={4.5} />
                </section>
                <section>
                    <h4>SQL</h4>
                    <Rate className="resume-basic-details-skills-star" allowHalf defaultValue={4.5} />
                </section>
                <section>
                    <h4>Python</h4>
                    <Rate className="resume-basic-details-skills-star" allowHalf defaultValue={4} />
                </section>
                <section>
                    <h4>React.js</h4>
                    <Rate className="resume-basic-details-skills-star" allowHalf defaultValue={3.5} />
                </section>
                <section>
                    <h4>JavaScript</h4>
                    <Rate className="resume-basic-details-skills-star" allowHalf defaultValue={3.5} />
                </section>
                <section>
                    <h4>Data Governance</h4>
                    <Rate className="resume-basic-details-skills-star" allowHalf defaultValue={4} />
                </section>
            </section>
        )
    }

    return (
        <div className="resume-basic-details-wrapper">
            {getIdentity()}
            {getAbout()}
            {getContact()}
            {getSkills()}
        </div>
    )
}

export default ResumeBasicDetails;
