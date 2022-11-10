export default function Projects() {
  return (
    <section className="container projects">
      <h1>Projects</h1>
      <div className="grid-container">
        <a href="me.com">
          <div className="card">
            <img src="./images/me.png" className="card-image" alt="card-img" />
            <h2>My Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quisquam id sequi!
            </p>
          </div>
        </a>

        <a href="me.com">
          <div className="card">
            <img
              src="./images/ig_soc.png"
              className="card-image"
              alt="card-img"
            />
            <h2>Social Media</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quisquam id sequi!
            </p>
          </div>
        </a>

        <a href="me.com">
          <div className="card">
            <img
              src="./images/cycom.png"
              className="card-image"
              alt="card-img"
            />
            <h2>Cycom</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quisquam id sequi!
            </p>
          </div>
        </a>

        <a href="me.com">
          <div className="card">
            <img
              src="./images/form.png"
              className="card-image"
              alt="card-img"
            />
            <h2>Application Form</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quisquam id sequi!
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
