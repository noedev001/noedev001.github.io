import React, { useRef, useState } from "react";
import "./header.css";
import sound from "../../assets/sound.aac";

const SoundComponent = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <div className="sonido" onClick={() => handleClick()}>
      <span className={click ? "sound" : ""}></span>
      <span className={click ? "sound" : ""}></span>
      <span className={click ? "sound" : ""}></span>
      <span className={click ? "sound" : ""}></span>
      <span className={click ? "sound" : ""}></span>
      <span className={click ? "sound" : ""}></span>
      <audio src={sound} ref={ref} loop></audio>
    </div>
  );
};

export default SoundComponent;
