export default function Contact() {
    return (
      <section className="container">
        <h1 className="contact-me">Contact Me</h1>
        <div className="contact-div">
          <div className="form-div">
            <form className="contact-form">
              <p>Name</p>
              <input type="text" className="name-input" />
              <p>Email</p>
              <input type="email" className="email-input" />
              <p>Message</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="7"
                className="msg-input"
              ></textarea>
              <button type="submit">send</button>
            </form>
          </div>

          <div className="social-div">
            <div className="social-grid">
              <div>
                <img src='./social/whatsapp__logo.svg' alt='' />
                <p>Whatsapp</p>
              </div>
              <div>
                <img src='./social/twitter.svg' alt='' />
                <p>Twitter</p>
              </div>
              <div>
                <img src='./social/github__logo.svg' alt='' />
                <p>Github</p>
              </div>
              <div>
                <img src='./social/linkeding__logo.svg' alt='' />
                <p>Linkedin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}