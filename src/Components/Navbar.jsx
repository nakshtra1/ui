// Navbar.js
import React from "react";
import img from "../Img/logo.PNG";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="container">
      <div class="row">
        <div
          class="col"
          style={{ paddingRight: "0px", backgroundColor: "#ffffff" }}
        >
          <nav
            className="navbar navbar-expand-lg navbar-light "
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="container">
              <img style={{ width: "14%" }} src={img} alt="" />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="features">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="collaboration">
                      Collaboration
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="solutions">
                      Solutions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="testimonials">
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div
          class="col"
          style={{ paddingLeft: "0px",paddingRight: "0px", backgroundColor: "#EFF3F8" }}
        >
          <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"#EFF3F8"}}>
            <div className="container">
              <div
                className="collapse navbar-collapse"
                id="navbarNav"
                style={{ justifyContent: "center" }}
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <button
                      type="button"
                      class="btn btn-link text-decoration-none"
                      style={{ color: "black" }}
                    >
                      Login
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      class="btn btn-light"
                      style={{ backgroundColor: "#6f62e4", color:"white" }}
                    >
                      Sign up
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
