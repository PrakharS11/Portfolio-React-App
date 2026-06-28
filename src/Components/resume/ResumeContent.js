import React from 'react';
import "./styles/ResumeContent.css";

function ResumeContent() {

  const getUserExperience = (company, year, work) => {
    return (
      <section className="resume-content-user-experience-wrapper">
        <section className="resume-content-company-year-wrapper">
          <h4>{company}</h4>
          <p>{year}</p>
        </section>
        <section className="resume-content-user-experience-bullet">
          <ul>
            {work.map((list, index) => <li key={index}>{list}</li>)}
          </ul>
        </section>
      </section>
    )
  }

  const getExperience = () => {
    return (
      <section className="resume-content-experience-wrapper">
        <section>
          <h3>Experience</h3>
        </section>
        {getUserExperience("Data Eng, Mgmt and Governance Analyst — Accenture", "2022 – Present", [
          "Design and maintain large-scale data pipelines to support organizational data needs.",
          "Implement data governance frameworks to ensure data quality, lineage, and compliance.",
          "Collaborate with cross-functional teams to deliver data engineering solutions at scale.",
        ])}
      </section>
    )
  }

  const getUserEducation = (degree, year, institution, marks) => {
    return (
      <section className="resume-content-user-education-wrapper">
        <section className="resume-content-degree-year-wrapper">
          <h4>{degree}</h4>
          <p>{year}</p>
        </section>
        <section className="resume-content-intitution-marks-wrapper">
          <h5><b>{institution}</b></h5>
          <p>{marks}</p>
        </section>
      </section>
    )
  }

  const getEducation = () => {
    return (
      <section className="resume-content-education-wrapper">
        <section><h3>Education</h3></section>
        {getUserEducation("B.Tech — Computer Science & Engineering", "2019 – 2023", "Lovely Professional University", "")}
      </section>
    )
  }

  const getInterests = () => {
    return (
      <section className="resume-content-interest-wrapper">
        <section><h3>Interests</h3></section>
        <h4>Traveling, Hiking, Exploring Modern Technologies, Reading Tech Blogs</h4>
      </section>
    )
  }

  const getAchivAndCert = () => {
    return (
      <section className="resume-content-achive-cert-wrapper">
        <section><h3>Achievements & Certifications</h3></section>
        <ul>
          <li>Accenture — Data Engineering, Management and Governance (3 years of professional experience).</li>
          <li>Built and deployed a portfolio web app using React.js and Firebase Hosting.</li>
        </ul>
      </section>
    )
  }

  const getUserProjects = (name, timePeriod, work) => {
    return (
      <section className="resume-content-user-projects-wrapper">
        <section className="resume-content-user-project-name-wrapper">
          <h4>{name}</h4>
          <p>{timePeriod}</p>
        </section>
        <section className="resume-content-user-project-work-wrapper">
          <ul>
            {work.map((list, index) => <li key={index}>{list}</li>)}
          </ul>
        </section>
      </section>
    )
  }

  const getProjects = () => {
    return (
      <section className="resume-content-projects-wrapper">
        <section><h3>Projects</h3></section>
        {getUserProjects("Portfolio Website", "2022", [
          "Built a React.js portfolio with React Router, Ant Design, and Firebase Hosting.",
          "Embedded four interactive mini-apps: Digital Clock, Todo App, Dice Game, and Quote Generator.",
        ])}
        {getUserProjects("Todo App", "2022", [
          "Task management app with add/remove functionality and dark mode toggle.",
          "Built with React hooks (useState, useEffect) — no external state library.",
        ])}
        {getUserProjects("Scarne's Dice Game", "2022", [
          "Two-player turn-based dice game implementing Scarne's Dice rules.",
          "Manages per-player score state and turn logic in React.",
        ])}
        {getUserProjects("Random Quote Generator", "2022", [
          "Fetches live quotes from the Quotable.io REST API using Axios.",
          "Includes a glow/dark mode toggle and on-demand quote refresh.",
        ])}
      </section>
    )
  }

  return (
    <div className="resume-content-wrapper">
      {getEducation()}
      {getExperience()}
      {getProjects()}
      {getAchivAndCert()}
      {getInterests()}
    </div>
  )
}

export default ResumeContent;
