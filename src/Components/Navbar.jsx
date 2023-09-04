import React, { useState, useEffect } from "react";
import img from "../Img/logo.PNG";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [showLoginButtons, setShowLoginButtons] = useState(true);

  const toggleLoginButtons = () => {
    setShowLoginButtons(!showLoginButtons);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowLoginButtons(false);
      } else {
        setShowLoginButtons(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div
          className="col"
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
                  <li
                    className={`nav-item ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link" to="/">
                      Features
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === "/innercontain2" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link" to="/innercontain2">
                      Collaboration
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === "/innercontainer3" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link" to="/innercontainer3">
                      Solutions
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === "/innercontainer4" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link" to="/innercontainer4">
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {showLoginButtons && (
          <div
            className="col"
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
              backgroundColor: "#EFF3F8",
            }}
          >
            <nav
              className="navbar navbar-expand-lg navbar-light bg-light"
              style={{ backgroundColor: "#EFF3F8" }}
            >
              <div className="container">
                <div
                  className="collapse navbar-collapse"
                  id="navbarNav"
                  style={{ justifyContent: "center" }}
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link
                        to="/login"
                        type="button"
                        className="btn btn-link text-decoration-none"
                        style={{ color: "black" }}
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/signup"
                        className="btn btn-light"
                        style={{
                          backgroundColor: "#6f62e4",
                          color: "white",
                        }}
                      >
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
