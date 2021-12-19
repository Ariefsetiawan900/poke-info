import React from "react";
import "./style.css";

const Input = ({ onClick, onChange }) => {
  return (
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
  );
};

export default Input;
