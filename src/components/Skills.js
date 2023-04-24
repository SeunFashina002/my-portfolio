import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/Base_url";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Skills() {
  const [stacks, setStacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStack();
  }, []);

  const getStack = async () => {
    try {
      let response = await fetch(`${BASE_URL}/stacks`);
      let data = await response.json();
      setStacks(data);
      setLoading(false);      
    } catch (error) {
      console.log(error)
      setLoading(false);      
    }
  };

  return (
    <section className="container" id="skills">
      <div className="skills">
        <h1>Skills</h1>
        <div className="skill-grid">
          {loading
            ? Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="logo_group">
                  <Skeleton height={130}/>
                  <br />
                  <Skeleton height={20}/>
                </div>
              ))
            : stacks.map((stack, index) => (
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
