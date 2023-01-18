/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./header.css";
import { GrReactjs } from "react-icons/gr";
import { SiFlutter } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
const CuboComponent = () => {
  return (
    <div className="cubo layer" data-speed="5">
      {/* <input type="button" value="HitMe" className="btn btn-primary" /> */}

      <div className="box">
        <div className="card" id="front">
          <GrReactjs className="icon" />
        </div>
        <div className="card" id="back">
          <FaNodeJs className="icon" />
        </div>
        <div className="card" id="left">
          <SiFlutter className="icon" />
        </div>
        <div className="card" id="right">
          <FaLaravel className="icon" />
        </div>
        <div className="card" id="top">
          <IoLogoJavascript className="icon" />
        </div>
        <div className="card" id="bottom">
          <SiMysql className="icon" />
        </div>
      </div>
    </div>
  );
};

export default CuboComponent;
