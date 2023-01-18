/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./about.css";
import { BiDownload } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import ME from "../../assets/perfil.png";
import CV from "../../assets/CV.pdf";

const About = () => {  
  return (
    <section id="about">
      <h2 className="title">Acerca de mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="perfil">
            <BiUser className="about__icon" />
            <h3>Perfil</h3>
          </div>
          <p>
            Soy desarrollador de software graduado como Ingeniero de Sistemas enfocado principalmente en el desarrollo web y movil, incursionando como desarrollador front-end y back-end. En busca de nuevas oportunidades, altamente motivado para aprender, mejorar mis habilidades y trabajar en equipo.
          </p>
          <div className="perfil">
            <FaGraduationCap className="about__icon" />
            <h3>Educaión</h3>
          </div>
          <div className="about__cards">
            <article className="about__card">
              <h5>TEC. SUP. INFORMATICA</h5>
              <small>UMRPSFXCH | Sucre, Bolivia</small>
            </article>

            <article className="about__card">
              <h5>INGENIERIA DE SISTEMAS</h5>
              <small>UMRPSFXCH | Sucre, Bolivia</small>
            </article>
          </div>

          <div className="documentos">
            <a
              href={CV}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Descargar CV <BiDownload className="icon-download" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
