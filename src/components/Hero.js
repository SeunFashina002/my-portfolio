import { HashLink } from "react-router-hash-link";
import { RESUME_URL } from "../constants/Resume_url";


export default function Hero() {

  return (
    <section className="container intro">
      <h1>
        My name is Seun, I am a <span>Software Developer</span>
      </h1>

      <p className="body">
        I am a software developer eager to contribute to team success through
        hard work, attention to detail, and excellent organizational skills.
      </p>

      <div className="btns det-btn">
        <HashLink to="#contact">
          <button>Contact Me</button>
        </HashLink>

        <a href={RESUME_URL} target="__blank">
          <button>View Resume</button>
        </a>
      </div>
    </section>
  );
}
