import React from "react";

function Project(props) {
  return (
    <div>
        <div className="resume-content">
        <h3 className="mb-0">{props.name}</h3>
        <p>An application that would suggests top 3 recipes based on user input and depending on the recipe selected play video retrived from Youtube.</p>
        <img className="demoImage" src={props.imgSource} alt="demoImage"/>
        <p>Project URL: <a href={props.projectURL}>here</a></p>
        <p>Github Repo: <a href={props.githubURL}>here</a></p>
        </div>
    </div>
  );
}

export default Project;
