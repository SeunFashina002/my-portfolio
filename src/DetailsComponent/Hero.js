import React, { useState, useEffect } from "react";


export default function DetailsHero({id}) {

  let [project, setProject] = useState([]);

    useEffect(() => {
        getProject()
    },[])
    
  
  let getProject = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/projects/${id}`);
    let data = await response.json();
    setProject(data);
  };
  

  return (
    <div className="container">
      <div className="details">
        <h1>{project.title}</h1>

        <p>{project.description}</p>

        <div className="btns det-btn">
          <a href="me.com">
            <button>Not Deployed</button>
          </a>
          <a href={project.github_link}>
            <button>View Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}
