import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/Base_url";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      let response = await fetch(`${BASE_URL}/projects`);
      let data = await response.json();
      setProjects(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <section className="container projects" id="projects">
      <h1>Projects</h1>

      <div className="grid-container">
        {isLoading
          ? Array(3)
              .fill()
              .map((_, index) => (
                <Skeleton
                  key={index}
                    height={480}
                    style={{ borderRadius: "0.5rem", marginBottom: "1rem" }}
                  />
              ))
          : projects.map((project, index) => (
              <Link to={`projects/${project.id}`} key={index}>
                <div className="card">
                  <img
                    src={project.image}
                    className="card-image"
                    alt="card-img"
                  />
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
