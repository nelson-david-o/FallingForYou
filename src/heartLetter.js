import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./HeartLetter.css";

const HeartLetter = () => {
  const [envelopeClass, setEnvelopeClass] = useState("close");

  const handleOpen = () => {
    setEnvelopeClass("open");
  };

  const handleReset = () => {
    setEnvelopeClass("close");
  };

  return (
    <div>
      <div className="envlope-wrapper">
        <div id="envelope" className={envelopeClass}>
          <div className="front flap"></div>
          <div className="front pocket"></div>
          <div className="letter">
            <div className="words line1"></div>
            <div className="words line2"></div>
            <div className="words line3"></div>
            <div className="words line4"></div>
          </div>
          <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div>
        </div>
      </div>
      <div className="reset">
        <button onClick={handleOpen}>Open</button>
        <button onClick={handleReset}>Reset</button>
        <Link to="/dedication">
          <button>Unas palabras</button>
        </Link>
      </div>
    </div>
  );
};

export default HeartLetter;
