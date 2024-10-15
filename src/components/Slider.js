import React from "react";
import stjit from "../img/stjit.jpg";
import "../css/slider.css";
import { useState } from "react";
import AdmissionForm from "./AdmissionForm";

export default function Slider() {
  const [formdisplay, setFormdisplay] = useState(false);
  return (
    <div>
      <div className="slideContainer">
        <img src={stjit} alt="STJIT PHOTO" className="stjitimg" />
        <div className="slidelines">
          A DREAM PLACE TO <br />
          MAKE FUTURE
          <br />
          <br />
          <button className="slideBtn">EXPLORE</button>
          <button
            className="slideBtn"
            onClick={() => {
              setFormdisplay(true);
              console.log("true");
            }}
          >
            APPLY
          </button>
        </div>
        <div className="circles">
          <div class="circle-container">
            <div class="circle">
              <i class="fa-solid fa-comments-dollar"></i>
            </div>
            <div class="circle">
              <i class="fa-brands fa-whatsapp"></i>
            </div>
            <div class="circle">
              <i class="fa-solid fa-image"></i>
            </div>
            <div class="circle">
              {" "}
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div class="circle">
              {" "}
              <i class="fa-solid fa-book"></i>
            </div>
            <div class="circle">
              <i class="fa-solid fa-location-dot"></i>
            </div>
          </div>
        </div>
      </div>
      {formdisplay == true ? (
        <AdmissionForm setFormdisplay={setFormdisplay} />
      ) : (
        ""
      )}
    </div>
  );
}
