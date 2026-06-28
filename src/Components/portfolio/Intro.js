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
                    <p>Hi, I'm Prakhar Srivastava, a Data Engineer with 3 years of experience building and maintaining systems that help organizations work with large volumes of data. I have a strong development background from college projects and enjoy exploring modern technologies. Outside of work, I like traveling, hiking, and staying active.</p>
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
