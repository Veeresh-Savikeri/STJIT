import React,{ useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "../css/admissionForm.css";
import graduation from "../img/graduation.png";

export default function AdmissionForm(prop) {
  const form = useRef();
  const [sendMail,setSendMail]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ycjtzyk', 'template_o8a4kui', form.current, {
        publicKey: 'Y527Wdtf8X1GE5YaF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSendMail(true);

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="admissionFormPosition">
      <div className="AdmissionForm">
        <div className="formdark">
          <div className="formLeft">
            <p>ADDMISSION ENQUIRY</p>
            <form ref={form} className="formaline">
              <p>
                NAME :{" "}
                <input
                  type="text"
                  placeholder="NAME"
                  style={{ width: "35%" }}
                  name="from_name"
                />
              </p>
              <p>
                EMAIL :{" "}
                <input
                  type="text"
                  placeholder="EMAIL"
                  style={{ width: "34%" }}
                  name="to_name"
                />
              </p>
              <p>
                PHONE :{" "}
                <input
                  type="text"
                  placeholder="PHONE"
                  style={{ width: "33%" }}
                  name="message"
                />
              </p>
              <p>
                ADDRESS :{" "}
                <input
                  type="text"
                  placeholder="ADDRESS"
                  style={{ width: "29%" }}
                   name="message"
                />
              </p>
              <button className="admissionFormbtn" onClick={() => { prop.setFormdisplay(false) }}>CANCEL</button>
              <button className="admissionFormbtn" value="Send" onClick={sendEmail}>SEND</button>
              {sendMail===true?(<h1 style={{color:"black",position:"absolute",top:"0px",right:"0px",backgroundColor:"orange"}}>SUCCESSFULLY SENT</h1>):''}
            </form>
          </div>
          <div className="formRight">
            <img src={graduation} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
