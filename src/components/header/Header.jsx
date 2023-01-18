import React from "react";
import "./header.css";
import Logo from "./logoComponent";
import HeaderSocial from "./HeaderSoacial";
import Sonido from "./SoundComponent";
import ImagenComponent from "./ImagenComponent";
import CuboComponent from "./CuboComponent";
import { BsChevronDown } from "react-icons/bs";
import { CgMouse } from "react-icons/cg";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <Logo />
        <Sonido />
        <div className="header__central">
          <div className="name">
            <h4>HOLA, SOY</h4>
            <h1>NOEL</h1>
            <p>Desarrollador de Software</p>

            <a href="#contact" className="btn btn-primary">
              Contactar
            </a>
          </div>
          <div className="animation">
            <ImagenComponent />
            <CuboComponent />
          </div>

          <a href="#contact" className="scroll__down">
            <CgMouse className="icon-mouse" />
            Has click <BsChevronDown className="icon-down" />
          </a>
        </div>

        <HeaderSocial />
      </div>
    </header>
  );
};

export default Header;
