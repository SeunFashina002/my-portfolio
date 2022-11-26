import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Details() {

  let {id} = useParams()
  let [project, setProject] = useState([]);

  let getProject = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/projects/${id}`);
    let data = await response.json();
    setProject(data);
  };

  return (
    <div className="container">
      <h1>
        My name is Seun, I am a <span>Python Developer</span>
      </h1>

      <p className="body">
        I'm a developer with years of experience in building backend
        applications. Programming languages i frequently use are Django, React
        and Javascript. Coding is my passion, and I am eager to advance my
        career in it.
      </p>

      <div className="btns">
        <button>Contact Me</button>
        <button>Get Resume</button>
      </div>
    </div>
  );
}
