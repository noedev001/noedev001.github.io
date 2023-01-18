import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { FiDribbble } from "react-icons/fi";
import "./header.css";

const HeaderSoacial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/einar-herrera-2800a6230/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/noedev001" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      {/* <a href="http://dribbble.com" target="_blank" rel="noreferrer">
        <FiDribbble />
      </a> */}
    </div>
  );
};

export default HeaderSoacial;
