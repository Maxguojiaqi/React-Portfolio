import React from "react";
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Educations'

function About() {
  return (
    <div className="mt-3 text-center">
      <section id="about">
      <img width="220" height="300" src="./img/profile.jpg" className="rounded mx-auto d-block" alt="profile"/>
        <div className="w-100">
          <h1 className="mb-2">Jiaqi Guo
            <span className="text-primary">Max</span>
          </h1>
          <div className="subheading mb-1">Contact Me:
            <a href="mailto:maxguojiaqi@gmail.com">maxguojiaqi@gmail.com</a>
          </div>
          <div className="subheading mb-5">View My PDF Resume:
            <a href="Resume-MaxGuo.pdf">Click Here</a>
          </div>
          <p className="mb-2">GIS professional focus on GIS related system design, application development and business case analysis. </p>
          <p className="mb-2">Rich solution providing experience from many industies, including but not limit to: <strong> Forestry, Defence, Public Health, Disaster Response and Transpotation</strong></p>
          <p className="mb-4">Currently I'm working as a GIS Conslutant for <a href="https://esri.ca/en">Esri Canada</a></p>
          <div className="mb-5 social-icons">
            <a href="https://www.linkedin.com/in/maxguojiaqi">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Maxguojiaqi">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
      <Skills/>
      <Experience/>
      <Education/>
    </div>
  );
}

export default About;
