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
            <div className="letter">
              <p>
                La mejor asistencia de la nena fuimos nosotros.
              </p>
            </div>
          </div>
          <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div>
        </div>
      </div>
      <div className="reset">
      <button onClick={handleOpen}>
          <i className="fas fa-envelope-open"></i>
        </button>
        <button onClick={handleReset}>
          <i className="fas fa-redo"></i>
        </button>
        <Link to="/dedication">
          <button>
            <i className="fas fa-heart"></i>
          </button>
        </Link>
        <Link to="/carousel">
          <button>
            <i className="fas fa-images"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeartLetter;
