import React from "react";
import "./ClientHeader.css";
import { Link } from "react-router-dom";

function ClientHeader() {
  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <img
          src="logo.png"
          className="logo-img"
          width="230px"
          height="120px"
        />{" "}
      </Link>

      <div className="NavTopics">
        <ul className="navItem">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/category">
            <li>Category</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
        </ul>
      </div>

      <Link to="/singup">
        <button type="button" className="singup">
          SING UP
        </button>
      </Link>

      <button type="button" className="singin">
        SING IN
      </button>
    </div>
  );
}

export default ClientHeader;
