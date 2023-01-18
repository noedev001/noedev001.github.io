import React from "react";
import "./header.css";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
import img9 from "../../assets/9.png";
import img10 from "../../assets/10.png";
import img11 from "../../assets/11.png";
import img12 from "../../assets/12.png";

const ImagenComponent = () => {
  return (
    <div>
      <img src={img1} alt="" data-speed="1" className="layer" />
      <img src={img2} alt="" data-speed="5" className="layer" />
      <img src={img3} alt="" data-speed="2" className="layer" />
      <img src={img4} alt="" data-speed="6" className="layer" />
      <img src={img5} alt="" data-speed="2" className="layer" />
      <img src={img6} alt="" data-speed="-2" className="layer" />
      <img src={img7} alt="" data-speed="4" className="layer" />
      <img src={img8} alt="" data-speed="-9" className="layer" />
      <img src={img9} alt="" data-speed="3" className="layer" />
      <img src={img10} alt="" data-speed="4" className="layer" />
      <img src={img11} alt="" data-speed="-4" className="layer" />
      <img src={img12} alt="" data-speed="-7" className="layer" />
    </div>
  );
};

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

export default ImagenComponent;
