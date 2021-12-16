import React from "react";
import Logo from "../Assets/img/Logo.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row-hero">
          <div className="img-wrapper-hero">
            <img className="logo-hero" src={Logo} alt="" />
          </div>
          <div className="input-wrapper-hero">
            <input type="text" className="input-hero" />
            <button type="submit" className="btn">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
