import { useEffect, useState } from "react";
export default function Skills() {
  let [stacks, setStacks] = useState([]);

  useEffect(() => {
    getStack();
  }, []);

  let getStack = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/stacks/");
    let data = await response.json();
    setStacks(data);
  };

  return (
    <section className="container" id="skills">
      <div className="skills">
        <h1>Skills</h1>
        <div className="skill-grid">
          {stacks.map((stack, index) => (
            <div key={index} className="logo_group">
              <img
                className="logo_stack"
                src={stack.stack_image}
                alt={stack.alt}
              />
              <p className="stack_name">{stack.stack_name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
