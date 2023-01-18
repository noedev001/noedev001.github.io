import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dvqsoml",
        "template_uzljivs",
        form.current,
        "lpxAqqFDvBK9fb3do"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2 className="title">Contacto</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:enoe354@gmail.com" target="_blank" rel="noreferrer">
              Enviar Mensaje
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon" />
            <h4>Messenger</h4>
            <a
              href="https://m.me/noel.herrerachambi"
              target="_blank"
              rel="noreferrer"
            >
              Enviar Mensaje
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://wa.me/+59175450473"
              target="_blank"
              rel="noreferrer"
            >
              Enviar Mensaje
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            required
          />
          <input type="email" name="email" placeholder="Tu Email" required />
          <textarea name="message" rows="7" placeholder="Tu mensaje"></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
