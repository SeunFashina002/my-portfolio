import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/Base_url";

const ProjectFunctionality = ({ id }) => {
  let [functionalities, setFunctionalities] = useState([]);

  useEffect(() => {
    getFunctionality();
  }, []);

  const getFunctionality = async () => {
    let response = await fetch(
      `${BASE_URL}/${id}/detail/functionality`
    );
    let data = await response.json();
    setFunctionalities(data);
  };
  return (
    <div className="container">
      <div className="functionality-div">
        {functionalities.map((functionality, index) => (
          <div key={index} className="functonality-div-inner">
            <div className="functionality-text-div">
              <h1>{functionality.header}</h1>
              <p>{functionality.description}</p>
            </div>
            <div className="functionality-img-div">
              <img
                src={functionality.images}
                alt="project functionality screenshots"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFunctionality;
