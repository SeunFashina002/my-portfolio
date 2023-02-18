import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants/Base_url";

export default function DetailsHero({id}) {

  let [project, setProject] = useState('');

    useEffect(() => {
        getProject()
    },[])
    
  
  let getProject = async () => {
    let response = await fetch(`${BASE_URL}/${id}`);
    let data = await response.json();
    setProject(data);
  };
  

  return (
    <div className="container">
      <div className="details">
        <h1>{project.title}</h1>

        <p>{project.description}</p>

        <div className="btns det-btn">
          {project.project_link == "#" ? (
            ""
          ) : (
            <a href={project.project_link}>
                <button>{project.status}</button>
            </a>
          )}
          <a href={project.github_link}>
            <button>View Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}
