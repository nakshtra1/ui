import React from "react";
import img from "../Img/5.PNG";
import img1 from "../Img/4.PNG";


const InnerContent1 = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div
            class="col"
            style={{ paddingRight: "0px", backgroundColor: "white" }}
          >
            <h1 style={{ fontWeight: "700", paddingLeft: "10px" }}>
              Get everything
              <br />
              done in one place.
            </h1>
            <div class="container">
              <div class="row">
                <div></div>
                <div class="col">
                  <div>
                    <img src={img} alt="" />
                  </div>
                  <h5>Manage tasks</h5>
                  <p style={{ fontSize: "13px" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus, quisquam!
                  </p>
                </div>
                <div class="col">
                  <div>
                    <img src={img} alt="" />
                  </div>
                  <h5>Productivity</h5>
                  <p style={{ fontSize: "13px" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus, quisquam!
                  </p>
                </div>
                <div class="w-100"></div>
                <div class="col">
                  <div>
                    <img src={img} alt="" />
                  </div>
                  <h5>Knowledge</h5>
                  <p style={{ fontSize: "13px" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus, quisquam!
                  </p>
                </div>
                <div class="col">
                  <div>
                    <img src={img} alt="" />
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
            class="col"
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
              backgroundColor: "#EFF3F8",
            }}
          >
            <img style={{ width: "100%" }} src={img1} alt="" />
          </div>
        </div>
      </div>

    </>
  );
};

export default InnerContent1;
