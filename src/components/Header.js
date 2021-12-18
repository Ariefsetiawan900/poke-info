import React, { useState } from "react";
import Logo from "../Assets/img/Logo.png";

const Hero = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row-hero">
          <div className="img-wrapper-hero">
            <img className="logo-hero" src={Logo} alt="Logo" />
          </div>
          <div className="input-wrapper-hero">
            <input
              type="text"
              className="input-hero"
              placeholder="Please Input a Pokemon"
              onChange={onChange}
            />
            <button type="submit" className="btn" onClick={onClick}>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
