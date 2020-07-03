import React from "react";
import Project from "../components/Project"

function Projects() {

  const projects = [
    {
      name: "Budget Trackers",
      imgSource : "https://github.com/Maxguojiaqi/BudgetTrackers/raw/master/demo/demo.JPG",
      projectURL : "https://github.com/Maxguojiaqi/BudgetTrackers",
      githubURL : "https://still-stream-00919.herokuapp.com/"
    },
    {
      name: "Fitness Tracker",
      imgSource : "https://github.com/Maxguojiaqi/TheFitnessTracker/raw/master/Demos/demo3.JPG",
      projectURL : "https://github.com/Maxguojiaqi/TheFitnessTracker",
      githubURL : "https://floating-plains-43446.herokuapp.com/"
    },
    {
      name: "Master Cook",
      imgSource : "https://github.com/Maxguojiaqi/GroupProject1/raw/master/utilities/images/2.userinput.png",
      projectURL : "https://maxguojiaqi.github.io/GroupProject1/index.html",
      githubURL : "https://github.com/Maxguojiaqi/GroupProject1"
    },
    {
      name: "Sharit",
      imgSource : "../img/sharit.JPG",
      projectURL : "https://sharit-social-platform.herokuapp.com/signup-login",
      githubURL : "https://github.com/mila-mamat/Project2-Sharit"
    },
    {
      name: "Quiz Game",
      imgSource : "https://github.com/Maxguojiaqi/Assignment4/raw/master/Assets/main.JPG",
      projectURL : "https://maxguojiaqi.github.io/Quiz-Game/index.html",
      githubURL : "https://github.com/Maxguojiaqi/Quiz-Game"
    },
    {
      name: "Burger App",
      imgSource : "./img/Burger.JPG",
      projectURL : "https://afternoon-chamber-65403.herokuapp.com/",
      githubURL : "https://github.com/Maxguojiaqi/NodeExpressHandleBars"
    },
    {
      name: "Work Day Scheduler",
      imgSource : "https://github.com/Maxguojiaqi/Assignment5/raw/master/Assets/sample.JPG",
      projectURL : "https://maxguojiaqi.github.io/Work-Day-Scheduler/index.html",
      githubURL : "https://github.com/Maxguojiaqi/Work-Day-Scheduler"
    },
    {
      name: "Weather Dashboard",
      imgSource : "https://github.com/Maxguojiaqi/Assignment6/raw/master/Assets/sample.jpg",
      projectURL : "https://maxguojiaqi.github.io/Weather-Dashboard/index.html",
      githubURL : "https://github.com/Maxguojiaqi/Weather-Dashboard"
    }
  ]

  let projectsJSX = projects.map(element => {
    return <Project name={element.name} imgSource={element.imgSource} imageAlt={element.imageAlt} projectURL={element.projectURL} githubURL={element.githubURL} />
  })

  return (
    <div className="mt-3 text-center">
    <hr className="m-0"/>
    <section id="projects">
        <h2 className="mb-5">Selected Projects</h2>
        {projectsJSX}
    </section>
    </div>
  )
};

export default Projects;
