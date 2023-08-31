import React from "react";
import img from "../Img/9.PNG";

const InnerContainer4 = () => {
  return (
    <div>
      <div class="row" style={{ backgroundColor: "#eef0ff" }}>
        <div
          class="col"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <img src={img} alt="" />
        </div>
        <div class="col m-5">
          <h2>
            All communication <br />
            from your team in one <br />
            place. Accomplish <br />
            more, faster.
          </h2>
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
  );
};

export default InnerContainer4;
