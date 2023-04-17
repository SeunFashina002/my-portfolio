import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../constants/Base_url'

export default function Projects() {
  
  let [projects, setProjects] = useState([])
  useEffect(() => {
    getProjects()
  },[])

  let getProjects = async () => {
    let response = await fetch(`${BASE_URL}`);
    let data = await response.json();
    setProjects(data);
  };

  return (
    <section className="container projects" id="projects">
      <h1>Projects</h1>

      <div className="grid-container">
        {projects.map((project, index) => (
          <Link to={`projects/${project.id}`} key={index}>
            <div className="card">
              <img src={project.image} className="card-image" alt="card-img" />
              <h2>{project.title}</h2>

              {project.description.length < 120 && (
                <p>{project.description}</p>
              )}
              {project.description.length > 120 && (
                <p>{project.description.slice(0, 120) + "..."}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
