import React from "react";
import img from "../Img/5.PNG";
import img1 from "../Img/4.PNG";

const InnerContent1 = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col"
            style={{ paddingRight: "0px", backgroundColor: "white" }}
          >
            <h1 style={{ fontWeight: "700", paddingLeft: "10px" }}>
              Get everything
              <br />
              done in one place.
            </h1>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <img src={img} alt="" className="img-fluid" />
                  </div>
                  <h5>Manage tasks</h5>
                  <p style={{ fontSize: "13px" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus, quisquam!
                  </p>
                </div>
                <div className="col">
                  <div>
                    <img src={img} alt="" className="img-fluid" />
                  </div>
                  <h5>Productivity</h5>
                  <p style={{ fontSize: "13px" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus, quisquam!
                  </p>
                </div>
                <div className="w-100"></div>
                <div className="col">
                  <div>
                    <img src={img} alt="" className="img-fluid" />
                  </div>
                  <h5>Knowledge</h5>
                  <p style={{ fontSize: "13px" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus, quisquam!
                  </p>
                </div>
                <div className="col">
                  <div>
                    <img src={img} alt="" className="img-fluid" />
                  </div>
                  <h5>Collaboration</h5>
                  <p style={{ fontSize: "13px" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus, quisquam!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
              backgroundColor: "#EFF3F8",
            }}
          >
            <img
              style={{ width: "100%" }}
              src={img1}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerContent1;
