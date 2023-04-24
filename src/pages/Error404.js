import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="notfound">
      <div className="body">
        <img src="/images/404.svg" alt="not found image" />
        <div className="error-message">
          <h3>404 | Sorry, this is the end of the road!</h3>
          <Link to="/">&#8592; Go back to home</Link>
        </div>
      </div>
    </div>
  );
};
