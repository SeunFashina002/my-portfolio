import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  
  let [projects, setProjects] = useState([])
  useEffect(() => {
    getProjects()
  },[])

  let getProjects = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/projects/");
    let data = await response.json();
    setProjects(data);
  };

  return (
    <section className="container projects">
      <h1>Projects</h1>

      <div className="grid-container">
        {projects.map((project, index) => (
          <Link to={`projects/${project.id}`} key={index}>
            <div className="card">
              <img
                src={project.image}
                className="card-image"
                alt="card-img"
              />
              <h2>{project.title}</h2>
              <p>
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
