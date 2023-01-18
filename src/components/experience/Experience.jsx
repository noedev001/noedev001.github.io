import React from "react";
import "./experience.css";
import img2 from "../../assets/physics.png";
import img3 from "../../assets/css3.png";
import img4 from "../../assets/html.png";
import img5 from "../../assets/js.png";
import img6 from "../../assets/dart.png";
import img7 from "../../assets/flutter.png";
import img8 from "../../assets/laravel.png";
import img9 from "../../assets/php.png";
import img10 from "../../assets/nodejs.png";
import img11 from "../../assets/mysql.png";
import img12 from "../../assets/firebase.png";
import img13 from "../../assets/github.png";
const Experience = () => {
  return (
    <section id="experience">
      <h2 className="title">Mis Habilidades</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollador Front-End</h3>
          <div className="experience__content">
            <article className="cards">
              <img src={img2} alt={img2} />
              <h4>REACT</h4>
            </article>
            <article className="cards">
              <img src={img3} alt={img3} />
              <h4>CSS</h4>
            </article>
            <article className="cards">
              <img src={img4} alt={img4} />
              <h4>HTML</h4>
            </article>
            <article className="cards">
              <img src={img5} alt={img5} />
              <h4>JAVASCRIPT</h4>
            </article>
            <article className="cards">
              <img src={img6} alt={img6} />
              <h4>DART</h4>
            </article>
            <article className="cards">
              <img src={img7} alt={img7} />
              <h4>FLUTTER</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Desarrollo de Back-End</h3>
          <div className="experience__content">
            <article className="cards">
              <img src={img8} alt={img8} />
              <h4>LARAVEL</h4>
            </article>
            <article className="cards">
              <img src={img9} alt={img9} />
              <h4>PHP</h4>
            </article>
            <article className="cards">
              <img src={img10} alt={img10} />
              <h4>NODE JS</h4>
            </article>
            <article className="cards">
              <img src={img11} alt={img11} />
              <h4>MYSQL</h4>
            </article>
            <article className="cards">
              <img src={img12} alt={img12} />
              <h4>FIREBASE</h4>
            </article>
            <article className="cards">
              <img src={img13} alt={img13} />
              <h4>GITHUB</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
