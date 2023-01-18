/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        NoeDev
      </a>

      <ul className="permalink">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#about">Acerca de mi</a>
        </li>
        <li>
          <a href="#experience">Habilidades</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/profile.php?id=100079000389792"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/einar_noel/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/noedev001"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; NoeDev Tutorials. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
