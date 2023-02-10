import myresume from '../myresume.pdf'
import { HashLink } from "react-router-hash-link";
export default function Hero() {

  return (
    <section className="container intro">
      <h1>
        My name is Seun, I am a <span>Python Developer</span>
      </h1>

      <p className="body">
        I'm a developer with years of experience in building backend
        applications. Programming languages i frequently use are Django, React
        and Javascript. Coding is my passion, and I am eager to advance my
        career in it.
      </p>

      <div className="btns det-btn">
        <HashLink to="#contact">
          <button>Contact Me</button>
        </HashLink>

        <a href={myresume} download="myresume.pdf">
          <button>Get Resume</button>
        </a>
      </div>
    </section>
  );
}
