import React, {useState, useEffect} from 'react'

export default function Projects() {
  
  let [projects, setProject] = useState([])
  useEffect(() => {
    getProject()
  })

  let getProject = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/projects/");
    let data = await response.json();
    setProject(data);
  };

  return (
    <section className="container projects">
      <h1>Projects</h1>

      <div className="grid-container">
        {projects.map((project, index) => (
          <a href="me.com" key={index}>
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
          </a>
        ))}
      </div>
    </section>
  );
}
