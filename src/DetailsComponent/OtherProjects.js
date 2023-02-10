import React, { useState, useEffect } from "react";



const OtherProejcts = ({id}) => {
    let [projects, setProjects] = useState([]);
        useEffect(() => {
        getProjects();
    }, []);

        let getProjects = async () => {
        let response = await fetch("http://127.0.0.1:8000/api/projects/");
        let data = await response.json();
        setProjects(data);
  };
  
    const other_projects = projects.map((project, index) => {
        if (id != project.id) {
            return (
              <div className="others" key={index}>
                <a href={`/projects/${project.id}`}>
                  <img
                    src={project.image}
                    className="others-image"
                    alt="card-img"
                  />
                </a>

                <h2>
                  <a href={`/projects/${project.id}`}>{project.title}</a>
                </h2>
                <p>
                  <a href={`/projects/${project.id}`}>{project.description}</a>
                </p>
              </div>
            );
        }
    })
    return (
    <section className="container projects">
        <h1>Other Projects</h1>

        <div className="grid-container">
            {other_projects}
        </div>
    </section>
    );

};

export default OtherProejcts