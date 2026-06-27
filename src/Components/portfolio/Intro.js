import React from 'react';
import guyCoding from "../../Resources/Images/guyCoding.png";
import profileImage from "../../Resources/Images/pic1.jpeg";
//import ReactPlayer from 'react-player'
import { WhatsAppOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
//import { LinkedinFilled, GithubFilled, FacebookFilled } from "@ant-design/icons";
import "./styles/Intro.css";

function Intro() {

    const getIntroCard = () => {
        return (
            <section className="portfolio-intro-card-wrapper">
                <section className="portfolio-intro-card-bg-image">
                    <img src={guyCoding} alt="description" />
                </section>
                <section className="portfolio-intro-card-content-wrapper">
                    <img src={profileImage} alt="description"/>
                    <h2>Prakhar Srivastava</h2>
                    <p>I am a Data Engineering and Governance Analyst with a strong interest in data quality, SQL, ETL processes, and automation.
                        I have hands-on experience in validating data flows, analyzing requirements, creating test scenarios, and working with business and technical teams.
                        I am currently strengthening my data engineering skills through SQL, Python, ETL pipelines, and cloud/data platform concepts.</p>
                    <div className="resume-CTA"><Link className="resume-link" to="resume">Resume</Link></div>
                </section>
            </section>
        )
    }

    // const getIntroVideo = () => {
    //     let playerWidth = window.innerWidth > 660 ? "500px" : "100vw";
    //     return (<ReactPlayer width={playerWidth} height="400px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />)
    // }

    const getIntroBody = () =>{
        return (
            <section className="portfolio-intro-body-wrapper">
                {getIntroCard()}
               
            </section>
        )
    }

  return (
  <div className="portfolio-intro-wrapper">
        <h1>Introduction</h1>
        {getIntroBody()}
        <div className="connect-whatsapp" onClick={()=>{window.open("https://wa.me/7004813287?text=Hello Prakhar, I want to talk to you regarding an opening in my company.")}}>
            <WhatsAppOutlined style={{color:"#fff", fontSize:"30px"}}/>
        </div>
  </div>
  )
}

export default Intro;
