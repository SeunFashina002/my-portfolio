import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { BASE_URL } from "../constants/Base_url";
import { NotFound } from "../pages/Error404";

const TechStack = ({ id }) => {
  const [stacks, setStacks] = useState(undefined);

  useEffect(() => {
    async function getStack() {
      try {
        let response = await fetch(`${BASE_URL}/projects/${id}/detail/pstack`);
        const data = await response.json();
        if (data === "Project does not exist") {
          setStacks(null);
        } else {
          setStacks(data);
        }
      } catch (error) {
        console.error(error, "this is the stack error message");
        setStacks(null);
      }
    }

    getStack();
  }, [id]);

  if (stacks === null) {
    return <NotFound />;
  }

  if (!stacks) {
    return (
      <div className="container">
        <div className="project-stack-div">
          <h1>Tech Stack</h1>
          <div className="skills">
            <Skeleton height={25}/>

            <div className="skill-grid">
              {Array.from({ length: 5 }, (_, index) => (
                <div key={index}>
                  <Skeleton height={130}  />
                  <br />
                  <Skeleton height={20} />
                </div>
              ))}
            </div>
          </div>

          <br />
          <br />
          <div className="skills">
            <Skeleton height={25}/>

            <div className="skill-grid">
              {Array.from({ length: 5 }, (_, index) => (
                <div key={index}>
                  <Skeleton height={130} />
                  <br />
                  <Skeleton height={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // extract categories from the stack and store in new array
  const categories = stacks
    ? Array.from(new Set(stacks.map((stack) => stack.category)))
    : [];

  return (
    <div className="container">
      <div className="project-stack-div">
        <h1>Tech Stack</h1>
        {/* loop thru the categories arrays we created from stack */}
        {categories.map((category) => (
          <div key={category} className="skills">
            <h1>{category}</h1>
            <div className="skill-grid">
              {stacks.map((stack) => {
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
