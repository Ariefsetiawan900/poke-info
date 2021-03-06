import React, { useState } from "react";
import LogoPic1 from "../../Assets/img/Logo.png";
import { Input, MainLogo } from "../../components";
import { Link } from "react-router-dom";

import "./style.css";

const Header = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value.toLowerCase());
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  if (props.isCenter) {
    return (
      <Link to="/">
        <MainLogo logoPic={LogoPic1} small />
      </Link>
    );
  }
  return (
    <section className="header-section">
      <div className="container">
        <div className="header-row">
          <MainLogo logoPic={LogoPic1} />
          <Input onChange={onChange} onClick={onClick} />
        </div>
      </div>
    </section>
  );
};

export default Header;
