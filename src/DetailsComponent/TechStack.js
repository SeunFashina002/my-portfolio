import {useEffect, useState} from 'react'

const TechStack = ({ id }) => {
  let [stacks, setStacks] = useState([])

  useEffect(() => {
    getStack()
  }, [])

  const getStack = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/projects/${id}/detail/pstack`);
    let data = await response.json()
    setStacks(data)
  }


  return (
    <div className="container">
      <div className="project-stack-div">
        <h1>Tech Stack</h1>
        <div className="skills">
          <h1>Frontend</h1>
          <div className="skill-grid">
            {stacks.map((stack, index) => {
              if (stack.category == "frontend") {
                return (
                  <div key={index} className="logo_group">
                    <img
                      className="logo_stack"
                      src={stack.stack_image}
                      alt={stack.alt}
                    />
                    <p className="stack_name">{stack.stack_name}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>

        
        <div className="skills">
          <h1>Backend</h1>
          <div className="skill-grid">
            {stacks.map((stack, index) => {
              if (stack.category == "backend") {
                return (
                  <div key={index} className="logo_group">
                    <img
                      className="logo_stack"
                      src={stack.stack_image}
                      alt={stack.alt}
                    />
                    <p className="stack_name">{stack.stack_name}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
