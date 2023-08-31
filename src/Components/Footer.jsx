import React from "react";
import img from "../Img/logo.PNG";

const Footer = () => {
  return (
    <footer className="bg-white text-dark">
      <div className="container py-5">
        <div className="row align-items-center">
          <div
            className="col-md-6 col-lg-4"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
          >
            <div className="d-flex align-items-center flex-md-column mb-4">
              <div>
                <div>
                  <p style={{ fontSize: "28px", fontWeight: "500" }}>
                    Subscribe to Our Newsletter
                  </p>
                </div>

                <img src={img} alt="Company Logo" className="me-2" />
                <p style={{ fontSize: "9px" }}>
                  Offal shabby chic hoodie gentrity truffaut
                </p>
                <div className="footer-social-icons">
                  <a href="#" class="fa fa-facebook mx-2"></a>
                  <a href="#" class="fa fa-twitter mx-2"></a>
                  <a href="#" class="fa fa-linkedin mx-2"></a>
                </div>
              </div>
            </div>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
          <div className="col-md-6 col-lg-8">
            <div
              className="mb-4"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "50%",
                  marginRight: "5px",
                }}
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                  style={{ width: "100%", padding: "0.585rem 0.75rem" }}
                />
                <button
                  className="btn btn-primary"
                  style={{ position: "absolute", top: "3px", right: "8px" }}
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-md-3">
                <h4>Company</h4>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-dark text-decoration-none" href="#">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#">
                      Carrier
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3">
                <h4>Product</h4>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-dark text-decoration-none" href="#">
                      Pricing product
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#">
                      Mobile Apps
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#">
                      Updates
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#">
                      WordPress
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#">
                      Web Security
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3">
                <h4>Legal</h4>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-dark text-decoration-none" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3">
                <h4>Help</h4>

                <ul className="list-unstyled">
                  <li>
                    <a className="text-dark text-decoration-none" href="#">
                      Payment Method
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#">
                      Knowledge Base
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#">
                      Tutorials
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
