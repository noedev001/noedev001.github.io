/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper";

import { GrGithub } from "react-icons/gr";

import Me from "../../assets/perfil.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="title">Portfolio</h2>
      <h5 className="description">Trabajos Realizados</h5>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="container portfolio__container"
      >
        <SwiperSlide>
          <div className="conten-portfolio">
            <div className="imagen">
              <img
                src="https://lh3.googleusercontent.com/pw/AM-JKLUl6ZZqFyC6CZNfmaSsy0ZulpFvr-8X_AP8ySvFwNwiaOyvWdiG1yh4SbR3GEGxyC_EJcok4xwxBQUbLSqvNW6GcvjRof5riovJzx-NN4j2Xnm7YYM2FcXAIjuTLCwUcPwxW5IIqM1dPuKbYxt6dmU=w820-h615-no?authuser=0"
                alt={Me}
              />
            </div>
            <div className="detalles">
              <h4>Admin para distribucion de productos</h4>
              <p>Laravel | Vue.js | MySql | JavaScript | PHP | HTML | CSS </p>

              <a
                href="https://github.com/noedev001/P1-LWeb-Admin-Distribuidora.git"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <GrGithub className="icon-repo" /> Github
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="conten-portfolio">
            <div className="imagen">
              <img
                src="https://lh3.googleusercontent.com/pw/AM-JKLVGUDKLiPNZbgUJx4MqB8uwcoMnUkkDaM8fnMEAyPbbqjUcDCt0Bwy0MMPWJr5pKLhyPNaqWycwa8bMtYYC04BGzaPeBtmyxD1uaWB_3aBY0youRV4rS3p4epJXfWMZ__NNWv0fGzxrHi_s2C-oeL8=w1252-h939-no?authuser=0"
                alt={Me}
                className="imagen-portafolio"
              />
            </div>
            <div className="detalles">
              <h4>App Catalogo de productos</h4>
              <p>Flutter | Dart </p>

              <a
                href="https://github.com/noedev001/P2F-App-Dist-Catalogo.git"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <GrGithub className="icon-repo" /> Github
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="conten-portfolio">
            <div className="imagen">
              <img
                src="https://lh3.googleusercontent.com/pw/AM-JKLXJlqqYhVT95FdJJUN3L3a6uw4VVNDVwh4_j9vGMpV995WgLBD0oRHu1x7n1VeldmDJsxSgzlrovggF8STaJgPeEQEMquZbYfRg86tB77FuJwiNa4jD44fzfD1BxKciTdWVA_cVBeivzJPjGCI8KMlx=w772-h579-no?authuser=0"
                alt={Me}
                className="imagen-portafolio"
              />
            </div>
            <div className="detalles">
              <h4>App Vista de Reproductor de Musica</h4>
              <p>React Native | JavaScript </p>

              <a
                href="https://github.com/noedev001/P4RN-App-Reproductor-Vista.git"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <GrGithub className="icon-repo" /> Github
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="conten-portfolio">
            <div className="imagen">
              <img
                src="https://lh3.googleusercontent.com/pw/AM-JKLVh-2nG7_HX3YOdjeiSea-QFQDTXwwokkNBo-HD7hWh0KnqkEkkd1jO1MlgSWn9ecKwS1AFcVJipeoGRMMAAuHmQ-4tbxhp8nFEcg3Q_v0zmfGKtT4E-jwBJz1mj9C3Hax2HyigjMGsgKmVHrBpVgYt=w1252-h939-no?authuser=0"
                alt={Me}
                className="imagen-portafolio"
              />
            </div>
            <div className="detalles">
              <h4>App de Tareas + Back-end</h4>
              <p>React Native | JavaScript | MySql | NodeJs</p>

              <a
                href="https://github.com/noedev001/P5NJsRN-App-Tareas.git"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <GrGithub className="icon-repo" /> Github
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="conten-portfolio">
            <div className="imagen">
              <img
                src="https://lh3.googleusercontent.com/pw/AM-JKLWr8fcCOWoYPrDfxewas8azGruTYpVp6KYvkyZqHTRSwFlhf18IJrhjBErLwg68qPgMZ4IVXDGQjnXOz1jMDcS96Vp6lh4myFIUIo6SKJOVFCf9orBR4hrgv3kZpfpy0ywRotlZbWjnq1W_6HAbjcoT=w1252-h939-no?authuser=0"
                alt={Me}
                className="imagen-portafolio"
              />
            </div>
            <div className="detalles">
              <h4>App web de lista de Peliculas</h4>
              <p>React Js | JavaScript | API publica | CSS | HTML</p>

              <a
                href="https://github.com/noedev001/P8RJs-Web-APIPublica-Peliculas.git"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <GrGithub className="icon-repo" /> Github
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="conten-portfolio">
            <div className="imagen">
              <img
                src="https://lh3.googleusercontent.com/pw/AM-JKLX-MErUInJrCa-b3Fdgjc_1BJNME1Z23wJQmbX3nvRNdC9fkCHjhX_5oYQuekIzV5tqpuAnHq2-JGUvf3js8hxs0MFfEcNZoVYA5ah_LlZuLMyHI5GwNkJr5BlaFmxuskq1U1Y6FLwM3qCBrunhak4=w1252-h939-no?authuser=0"
                alt={Me}
                className="imagen-portafolio"
              />
            </div>
            <div className="detalles">
              <h4>App Calculadora Simple</h4>
              <p>React Native | JavaScript </p>

              <a
                href="https://github.com/noedev001/P3RN-App-practicas.git"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <GrGithub className="icon-repo" /> Github
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="conten-portfolio">
            <div className="imagen">
              <img
                src="https://lh3.googleusercontent.com/pw/AM-JKLUkuBMMtsd24ZBdk43KkVKGzT7BsHXjmDNJMUZ2fW1XmiormO42Pwr23Bv4zIYZaJGtumCBBxwX4C5sdVgPQEG_UEaKIkeJU4gfR-oAxR_QRskanY163L6eMSbOsr_3Q7skEjQ7btXWz3077pNIgj34=w1252-h939-no?authuser=0"
                alt={Me}
                className="imagen-portafolio"
              />
            </div>
            <div className="detalles">
              <h4>App Juego Tres en Raya Simple</h4>
              <p>React Native | JavaScript </p>

              <a
                href="https://github.com/noedev001/P3RN-App-practicas.git"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <GrGithub className="icon-repo" /> Github
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="conten-portfolio">
            <div className="imagen">
              <img
                src="https://lh3.googleusercontent.com/pw/AM-JKLWfhf2amrt1F3puB4GUqhw_WWdHktTOkpg6kgs5DS-bRFHt1tvARSy5eo7Wu4PFl9CA6OJ44tzz1p552nU3EUfD5-5N29Gy65_lYDcweVjVMx5jG0w_eqDcWTw0eOk3dEhqCTpYUYLvofSKzmnv4Ejs=w1252-h939-no?authuser=0"
                alt={Me}
                className="imagen-portafolio"
              />
            </div>
            <div className="detalles">
              <h4>Mas Proyectos</h4>
              <p>En repositorio de Github </p>

              <a
                href="https://github.com/noedev001"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <GrGithub className="icon-repo" /> Github
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Portfolio;
