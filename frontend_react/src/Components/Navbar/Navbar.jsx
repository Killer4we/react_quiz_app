import React from "react";
// import { FaGithub } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <div className="container-fluid mx-0">
        <Link
          className="navbar-brand d-flex justify-content-center align-items-center"
          to="/"
        >
          <MdQuiz size={30} style={{ color: "#0d6efd" }} />
          <span className="logo-name">&nbsp;Quiz App</span>
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > */}
          {/* <span className="navbar-toggler-icon"></span> */}
        {/* </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="btn-frg-style ms-auto"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
