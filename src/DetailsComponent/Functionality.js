import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/Base_url";
import { NotFound } from "../pages/Error404";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const ProjectFunctionality = ({ id }) => {
  const [functionalities, setFunctionalities] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFunctionality() {
      try {
        let response = await fetch(
          `${BASE_URL}/projects/${id}/detail/functionality`
        );
        const data = await response.json();
        setFunctionalities(data);
        setLoading(false);

      } catch (error) {
        console.error(error);
        setFunctionalities("not found");
        setLoading(false);
      }
      
    }

    getFunctionality();
  }, [id]);

  if (functionalities === "not found") {
    return <NotFound />;
  }

  if (loading || !functionalities) {
    return (
      <div className="container">
        <div className="functionality-div">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="functonality-div-inner">
              <div className="functionality-text-div">
                <h1>
                  <Skeleton  />
                </h1>
                <p>
                  <Skeleton count={3} />
                </p>
              </div>
              <div className="functionality-img-div">
                <Skeleton height={300} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

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
