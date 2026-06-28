import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./styles/Achivement.css";
import "slick-carousel/slick/slick-theme.css";
import c1 from "../../Resources/Images/c1.jpg"
// import c2 from "../../Resources/Images/c1.jpg"
// import c3 from "../../Resources/Images/c1.jpg"

// import "slick-carousel/slick/slick-theme.css";

const settings = {
    className: "center",
    infinite: true,
    // autoplay: true,
    arrows: false,
    dots: true,
    autoplaySpeed: 2000,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
      ]
}

function Achivement() {
 
    const getCarousalCard = (achiveImg,title,description) => {
        return (
            <section className="portfolio-achivement-card-wrapper">
                <img src={achiveImg} alt="description"/>
                <h3>{title}</h3>
                <p>{description}</p>
            </section>
        )
    }

    return (
  <div id="portfolio-achivement-wrapper">
      <h1>Certifications & Achievements</h1>
      <Slider {...settings}>
            {getCarousalCard(c1,"B.Tech — CSE","Lovely Professional University, 2019–2023. Specialized in Computer Science & Engineering.")}
            {getCarousalCard(c1,"Data Engineer","Accenture — 3 years as Data Engineering, Management & Governance Analyst.")}
            {getCarousalCard(c1,"Portfolio Project","Built and deployed a full React.js portfolio with 4 embedded mini-projects on Netlify.")}
            {getCarousalCard(c1,"Digital Clock","Real-time clock app built with React hooks, useRef, and setInterval.")}
            {getCarousalCard(c1,"Scarne's Dice","Two-player turn-based dice game built with React state management.")}
            {getCarousalCard(c1,"Quote Generator","Live quote fetcher using Axios and a public REST API with glow mode.")}
      </Slider>
  </div>
  )
}

export default Achivement;
