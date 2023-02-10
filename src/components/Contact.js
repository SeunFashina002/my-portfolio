import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import successAlert from "./SuccessModal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yh0v8wm",
        "template_0o43zgt",
        form.current,
        "ov57oO-n77qjBG9fq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    afterSend();
  };

  const afterSend = () => {
    setName("");
    setEmail("");
    setMessage("");
    successAlert();
    
    
  };

  return (
    <section className="container" id="contact">
      <h1 className="contact-me">Contact Me</h1>
      <div className="contact-div">
        <div className="form-div">
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <p>Name</p>
            <input
              type="text"
              name="user_name"
              className="name-input"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <p>Email</p>
            <input
              type="email"
              name="user_email"
              className="email-input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <p>Message</p>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="7"
              value={message}
              className="msg-input"
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            <button type="submit">send</button>
          </form>
        </div>

        <div className="social-div">
          <div className="social-grid">
            <div>
              <a
                href="https://wa.me/08075422354"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./social/whatsapp__logo.svg" alt="whatsapp-logo" />
                <p>Whatsapp</p>
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/heisblaq_"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./social/twitter.svg" alt="twitter-logo" />
                <p>Twitter</p>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/seunfashina002"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./social/github__logo.svg" alt="github logo" />
                <p>Github</p>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/seun-fashina-7b6b01232/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./social/linkeding__logo.svg" alt="linkedin logo" />
                <p>Linkedin</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
