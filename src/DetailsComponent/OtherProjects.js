import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/Base_url";
import { NotFound } from "../pages/Error404";
import Skeleton from "react-loading-skeleton";

const OtherProjects = ({ id }) => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    async function getProjects() {
      try {
        let response = await fetch(`${BASE_URL}/projects/`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
        setProjects("not found");
      }
    }

    getProjects();
  }, [id]);

  if (projects === "not found") {
    return <NotFound />;
  }
  if (!projects) {
    return (
      <section className="container projects">
        <h1>Other Projects</h1>
        <div className="grid-container">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index}>
              <Skeleton height={200} />
              <br />
              <Skeleton height={25}/>
              <br />
              <Skeleton count={2} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  const other_projects = projects.map((project, index) => {
    if (id != project.id) {
      return (
        <div className="others" key={index}>
          <Link to={`/projects/${project.id}`}>
            <img src={project.image} className="others-image" alt="card-img" />
          </Link>

          <h2>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </h2>
          <p>
            <Link to={`/projects/${project.id}`}>{project.description}</Link>
          </p>
        </div>
      );
    }
  });

  return (
    <section className="container projects">
      <h1>Other Projects</h1>
      <div className="grid-container">{other_projects}</div>
    </section>
  );
};

export default OtherProjects;
