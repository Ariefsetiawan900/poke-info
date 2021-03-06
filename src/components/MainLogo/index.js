import React from "react";
import "./style.css";

const MainLogo = ({ logoPic, small }) => {
  return (
    <div className="img-wrapper-hero">
      <img
        className={`logo-hero ${small ? "small-logo" : "big-logo"}`}
        src={logoPic}
        alt="Logo"
      />
    </div>
  );
};

export default MainLogo;
