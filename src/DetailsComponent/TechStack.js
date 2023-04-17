import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/Base_url";

const TechStack = ({ id }) => {
  const [stacks, setStacks] = useState([]);

  useEffect(() => {
    getStack();
  }, []);

  const getStack = async () => {
    let response = await fetch(`${BASE_URL}/${id}/detail/pstack`);
    let data = await response.json();
    setStacks(data);
  };

  // extract categories from the stack and store in new array
  const categories = Array.from(new Set(stacks.map(stack => stack.category)));

  return (
    <div className="container">
      <div className="project-stack-div">
        <h1>Tech Stack</h1>
        {/* loop thru the categories arrays we created from stack */}
        {categories.map(category => (
          <div key={category} className="skills">
            <h1>{category}</h1>
            <div className="skill-grid">
              {stacks.map(stack => {
                if (stack.category === category) {
                  return (
                    <div key={stack.id} className="logo_group">
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
        ))}
      </div>
    </div>
  );
};

export default TechStack;
