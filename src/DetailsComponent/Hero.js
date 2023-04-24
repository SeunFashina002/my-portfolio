import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants/Base_url";
import { NotFound } from "../pages/Error404";
import Skeleton from "react-loading-skeleton";

export default function DetailsHero({ id }) {
  let [project, setProject] = useState("");

  useEffect(() => {
    async function getProject() {
      try {
        const response = await fetch(`${BASE_URL}/projects/${id}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error(error);
        setProject("not found");
      }
    }

    getProject();
  }, [id]);

  if (!project) {
    return (
      <div className="container">
        <div className="details">
          <Skeleton height={45} style={{ marginBottom: "1rem" }} />
          <Skeleton height={20} count={2} style={{ marginBottom: ".5rem" }} />
        </div>
      </div>
    );
  }

  const ProjectFunc = () => {
    if (project === "not found") {
      return <NotFound />;
    } else {
      return (
        <div className="details">
          <h1>{project.title}</h1>

          <p>{project.description}</p>

          <div className="btns det-btn">
            {project.project_link !== "#" && (
              <a href={project.project_link}>
                <button>{project.status}</button>
              </a>
            )}
            {project.github_link && (
              <a href={project.github_link}>
                <button>View Code</button>
              </a>
            )}
          </div>
        </div>
      );
    }
  };

  return <div className="container">{<ProjectFunc />}</div>;
}
