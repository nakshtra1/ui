import React from "react";
import img from "../Img/8.PNG";
import InnerContainer4 from "./InnerContainer4";

const InnerContainer3 = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div class="row">
        <div class="col">
          <div className="m-5">
            <h2
              style={{
                fontSize: "700",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              One platform <br />
              many solutions
            </h2>
            <p style={{ display: "flex", justifyContent: "flex-end" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Cupidi
               quibusdam in aut corrupti consequatur iure optio <br />{" "}
              necessitatibus tenetur. Alias, quo!
            </p>
            <p style={{ display: "flex", justifyContent: "flex-end" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. .
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginRight: "7em",
              }}
            >
              <button
                type="button"
                class="btn btn-light"
                style={{
                  backgroundColor: "#6f62e4",
                  color: "white",
                }}
              >
                Start for Free
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <img src={img} alt="" />
        </div>
      </div>
      <InnerContainer4/>
    </div>
  );
};

export default InnerContainer3;
