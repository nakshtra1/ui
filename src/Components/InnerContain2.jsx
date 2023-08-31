import React from "react";
import img from "../Img/6.PNG";
import img1 from "../Img/71.png";
import InnerContainer3 from "./InnerContainer3";


const InnerContain2 = () => {
  return (
    <>
    <div>
      <div class="row">
        <div class="col" style={{ paddingRight: "0px" }}>
          <img style={{ width: "100%" }} src={img} alt="" />
        </div>
        <div class="col" style={{ backgroundColor: "#e1e0ff" }}>
          <h2 className="mt-5" style={{ fontWeight: "700" }}>
            Collaborate with
            <br />
            team members and
            <br />
            create reports.
          </h2>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur
              <br />
              adipisicing elit. Excepturi ipsa deleniti
              <br />
              nobis sequi dolores architecto?
            </p>
            <img
              src={img1}
              style={{
                position: "relative",
                right: "12px",
                top: "322px",
                width: "102%",
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <InnerContainer3/>
    </>
  );
};

export default InnerContain2;
