import { useEffect, useState } from "react"

const ProjectFunctionality = ({ id }) => {
    let [functionalities, setFunctionalities] = useState([])


    useEffect(() => {
     getFunctionality()   
    }, [])


    const getFunctionality = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/projects/${id}/detail/functionality`)
        let data = await response.json()
        setFunctionalities(data);
    }
    return (
      <div className="container">
        <div className="functionality-div">
          {functionalities.map((functionality, index) => (
            <div className="functonality-div-inner">
              <div className="functionality-text-div">
                <h1>{ functionality.header}</h1>
                <p>
                    {functionality.description}
                </p>
              </div>
              <div className="functionality-img-div">
                <img src={functionality.images} alt="project functionality screenshots" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );    
}

export default ProjectFunctionality