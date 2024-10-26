import React, { useState } from "react";
import "../css/notification.css";


export default function Notifications() {
  const [date,setDate]= useState(new Date())
 
  const onChange= date =>{
    setDate(date)
    new Date(2024, 10, 27)
  }


  return (
    <div className="notifications">
      <div className="notificationCard">
        <div className="notBar">Notifications</div>
        <div className="notbody">
          <marquee behavior="scroll" direction="up" >
            <a href="#">
              {" "}
              * AICTE Training and Learning (ATAL) FDP Programme on "Recent
              Trends in MEMS/NEMS Technology for Biomedical Applications" From
              16th October 2023
            </a>
            <br />
            <br />
            <a href="#">
              {" "}
              * Three days workshop on Android Application Development & Python
              Programming
            </a>
            <br />
            <br />
            <a href="#">
              {" "}
              * Three days workshop on IOT and Mobile Application Development
            </a>
          </marquee>
        </div>
      </div>
      <div className="calenderCard">
        <div className="calenderBar">Calendar</div>
        <div className="calendarBody">
         
        </div>
      </div>
    </div>
  );
}
