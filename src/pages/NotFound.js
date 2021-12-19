import React from "react";
import NotFoundLogo from "../Assets/img/notFound.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound-section">
      <img src={NotFoundLogo} alt="Not Found" />
      <h1>Sorry, the page not found</h1>
      <Link to="/">
        <button className="btn">Back to home</button>
      </Link>
    </section>
  );
};

export default NotFound;
