import React from "react";
import img from "../Img/1.PNG";
import img1 from "../Img/2.PNG";
import img2 from "../Img/3.PNG";
import InnerContent1 from "./InnerContent1";
import InnerContain2 from './InnerContain2'

const Inner = () => {
  return (
    <div>
      <div class="container" style={{ width: "85%" }}>
        <div class="row">
          <div
            class="col"
            style={{ paddingRight: "0px", backgroundColor: "white" }}
          >
            <h1 style={{ fontWeight: "700" }}>
              {" "}
              Lorem ipsum is
              <br />
              dummy content
              <br />{" "}
              <span className="mt-2" style={{ background: "#c9b9fa" }}>
                Grocduls
              </span>
            </h1>
            <p className="mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button
              type="button"
              class="btn btn-light"
              style={{ backgroundColor: "#6f62e4", color: "white" }}
            >
              Start for Free
            </button>
            <div className="mt-3" style={{ width: "50%" }}>
              <img src={img} alt="" />
            </div>
          </div>
          <div
            class="col-md-6"
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
              backgroundColor: "#EFF3F8",
            }}
          >
            <div>
              <img src={img1} alt="" className="img-fluid" />
            </div>
          </div>
          <div style={{ backgroundColor: "white" }}>
            <div
              className="d-flex justify-content-center m-5"
              style={{ backgroundColor: "white" }}
            >
              <img src={img2} alt="" />
            </div>
          </div>
          <InnerContent1 />
        </div>
      </div>
      <InnerContain2 />
    </div>
  );
};

export default Inner;
