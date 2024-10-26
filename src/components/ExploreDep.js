import React, { useState } from "react";
import "../css/exploreDip.css";
import cse from "../img/cse.jpg";

export default function ExploreDep() {
  const [depInfo, setDepInfo] = useState("cse");
  let pertidep = () => {
    switch (depInfo) {
      case "cse":
        return (
          <div>
            {" "}
            <h2
              style={{
                color: "darkblue",
                paddingLeft: "20px",
                marginTop: "4vh",
              }}
            >
              Departments of
            </h2>
            <p
              style={{
                color: "darkblue",
                paddingLeft: "20px",
                color: "darkorange",
                fontWeight: "800",
                textShadow: "2px 2px 2px black",
                fontSize: "40px",
                display: "block",
              }}
            >
              Computer Science and Engineering
            </p>
            <p
              style={{
                paddingTop: "10px",
                paddingLeft: "20px",
                fontSize: "20px",
              }}
            >
              Department of Computer Science and Engineering is headed by Prof.
              Parameshwarappa C M. Department is imparting a quality education,
              keeping in mind the important role of software in the industry and
              in providing service to the better social life and overall
              development of mankind. Computer Science & Engineering department
              was established in the year 1992 with the Intake of 30. Now the
              current intake is 90. The department has enough number of
              computers of the reputed brands like IBM, HP, Acer, HCL machines,
              IBM Xeon Servers and the department also manages 100 Mbps Leased
              Line Internet connectivity and two broadband internet
              connectivity. Department has subscribed to Microsoft Campus
              agreement program, which helps to get all the necessary software
              required by Staff and Students to carry out state of the art
              projects. e-Journals subscription has been done to encourage
              research activities amongst faculty members and students. All the
              computers spread across the campus are being networked together.
              The department also maintain WiFi connectivity around the campus
            </p>
            <button
              style={{
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "darkorange",
                position: "absolute",
                right: "5vw",
                fontSize: "20px",
                border: "2px solid black",
              }}
            >
              More...
            </button>
          </div>
        );
      case "ise":
        return (
          <div>
            {" "}
            <h2
              style={{
                color: "darkblue",
                paddingLeft: "20px",
                marginTop: "4vh",
              }}
            >
              Departments of
            </h2>
            <p
              style={{
                color: "darkblue",
                paddingLeft: "20px",
                color: "darkorange",
                fontWeight: "800",
                textShadow: "2px 2px 2px black",
                fontSize: "40px",
                display: "block",
              }}
            >
              Information Science and Engineering
            </p>
            <p
              style={{
                paddingTop: "10px",
                paddingLeft: "20px",
                fontSize: "20px",
              }}
            >
              Department of Information Science and Engineering is headed by Dr.
              S G Makanur. The department is developed to impart a quality
              education, keeping in mind the important role of software in the
              industry and in providing service to the better social life and
              overall development of mankind. The Department was Established in
              the year 2001 with the Intake of 40. Now the intake is 60. The
              department has enough number of computers of the reputed brands
              like IBM, IBM Xeon Server and HP HT machines with Internet access
              facility. e-Journal subscription has been done to encourage
              research activities amongst staff members and the students. The
              department has an association “ Info Vista ”, managed by staff and
              student. It focuses on current trends in IT Industry
            </p>
            <button
              style={{
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "darkorange",
                position: "absolute",
                right: "5vw",
                fontSize: "20px",
                border: "2px solid black",
              }}
            >
              More...
            </button>
          </div>
        );

      case "eee":
        return (
          <div>
            {" "}
            <h2
              style={{
                color: "darkblue",
                paddingLeft: "20px",
                marginTop: "4vh",
              }}
            >
              Departments of
            </h2>
            <p
              style={{
                color: "darkblue",
                paddingLeft: "20px",
                color: "darkorange",
                fontWeight: "800",
                textShadow: "2px 2px 2px black",
                fontSize: "40px",
                display: "block",
              }}
            >
              Electrical & Electronics Engineering
            </p>
            <p
              style={{
                paddingTop: "10px",
                paddingLeft: "20px",
                fontSize: "20px",
              }}
            >
              Department of Electrical and Electronics Engineering is headed by
              Dr. S F Kodad, M.Tech,Ph. D The department have well qualified and
              experienced faculty to meet the requirements of current
              engineering students. The Department was established in the year
              1980 and has the Intake of 60. The department has well equipped
              laboratories with back up power supply and H.T station to impart
              effective training to the students. Students get practical
              knowledge in various laboratories like Relay & High voltage lab,
              Electrical machines lab, Electrical measurements lab, Power
              electronics lab, Control system lab, Analog electronics lab,
              Digital electronics lab, Microprocessor lab& computer lab.
              Computer lab has got various simulation package like Mi power, MAT
              lab, Pspice, Microsim,Auto CAD etc. The department conducts
              periodical lectures by experts for the benefit of students and
              also imparts advanced teaching and training in specialized
              subjects for the staff members. Students are motivated to undego
              vacational training in reputed industries to upgrade their
              practical knowledge. Students take up project works in the college
              as well as in industries as part of their curriculum during the
              final year. Many projects are approved and financed by KSCST and
              also selected for the state level seminar cum exhibition.
            </p>
            <button
              style={{
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "darkorange",
                position: "absolute",
                right: "5vw",
                fontSize: "20px",
                border: "2px solid black",
              }}
            >
              More...
            </button>
          </div>
        );
      case "ece":
        return (
          <div>
            {" "}
            <h2
              style={{
                color: "darkblue",
                paddingLeft: "20px",
                marginTop: "4vh",
              }}
            >
              Departments of
            </h2>
            <p
              style={{
                color: "darkblue",
                paddingLeft: "20px",
                color: "darkorange",
                fontWeight: "800",
                textShadow: "2px 2px 2px black",
                fontSize: "40px",
                display: "block",
              }}
            >
              Electronics and Communication
            </p>
            <p
              style={{
                paddingTop: "10px",
                paddingLeft: "20px",
                fontSize: "20px",
              }}
            >
              Department of Electronics and Communication Engineering is headed
              by Dr. B Maheshwarappa. The department imparts education and
              training in advanced and diversified field of Electronics with
              application orientation. It enables the students to become applied
              electronics engineers. The department has erudite faculty with
              expertise in all advanced subjects. The Department was established
              in the year 1987 with an Intake of 60. Now it is increased to 90.
              Department has well established Laboratories with latest
              equipments to cater to VTU syllabus. The advanced subjects like
              VHDL, VLSI, Embedded Controllers, Advanced Micro controllers,
              Optical Fibre Communication. The department has staff who have
              expertise in Advanced Micro controllers and Embedded Systems. Many
              outstanding projects in the above field have been guided
              successfully in the department itself. The department has its own
              library enriched with latest titles. The student association of
              Electronics and Communication called "Talentronix" provides a
              stage for students for all round development. Every student
              conducts each experiment individually as the number of equipments
              is sufficient. One student per table is the rule in every
              Laboratory.
            </p>
            <button
              style={{
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "darkorange",
                position: "absolute",
                right: "5vw",
                fontSize: "20px",
                border: "2px solid black",
              }}
            >
              More...
            </button>
          </div>
        );
      case "mech":
        return (
          <div>
            {" "}
            <h2
              style={{
                color: "darkblue",
                paddingLeft: "20px",
                marginTop: "4vh",
              }}
            >
              Departments of
            </h2>
            <p
              style={{
                color: "darkblue",
                paddingLeft: "20px",
                color: "darkorange",
                fontWeight: "800",
                textShadow: "2px 2px 2px black",
                fontSize: "40px",
                display: "block",
              }}
            >
              Mechanical Engineering
            </p>
            <p
              style={{
                paddingTop: "10px",
                paddingLeft: "20px",
                fontSize: "20px",
              }}
            >
              Department of Mechanical Engineering is headed by Dr. J O Kiran.
              The department has well qualified, technically sound and
              experienced faculty to cater to the needs of the present day
              Technical Education. Our Department was established on 1980 and
              has the intake of 90. The department has well equipped
              laboratories and workshops to impart effective training to the
              students. Students get practical training in various manufacturing
              processes like Foundry, Welding, Sheet Metal, and Milling& also in
              the subjects like Material Science, Measurements & Metrology, IC
              Engine, Heat Transfer. Besides these, they also get the practical
              training in the latest areas like Auto CAD, Ansys, CAMDetc. The
              department has well furnished drawing halls with good lighting and
              ventilation. Students take up project work in college & in
              industries, which forms a part of their curriculum during their
              final year of study. Many projects are approved and financed by
              KSCST in the last 10 years.
            </p>
            <button
              style={{
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "darkorange",
                position: "absolute",
                right: "5vw",
                fontSize: "20px",
                border: "2px solid black",
              }}
            >
              More...
            </button>
          </div>
        );
      case "civil":
        return (
          <div>
            {" "}
            <h2
              style={{
                color: "darkblue",
                paddingLeft: "20px",
                marginTop: "4vh",
              }}
            >
              Departments of
            </h2>
            <p
              style={{
                color: "darkblue",
                paddingLeft: "20px",
                color: "darkorange",
                fontWeight: "800",
                textShadow: "2px 2px 2px black",
                fontSize: "40px",
                display: "block",
              }}
            >
              Civil Engineering
            </p>
            <p
              style={{
                paddingTop: "10px",
                paddingLeft: "20px",
                fontSize: "20px",
              }}
            >
              The Department of Civil Engineering is headed by Prof. Dineshkumar
              S Maganur. Department has well qualified, technically sound,
              experienced and caring faculty to cater to the needs of the
              present day Technical Education. The Department was Established in
              the year 1980 with an intake of 50. Now the current intake is 90.
              The department has laboratories that are well equipped meeting the
              requirements of AICTE norms. The students are trained to be
              competent enough in theoretical and practical aspects. The
              advanced subjects like AUTO-CAD, Ground Water Engineering, Solid
              Waste Management, Air Pollution etc., are taught. The department
              has well equipped laboratories. The department has a unique model
              room, housing about 100 different forms of civil engineering
              structures.
            </p>
            <button
              style={{
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "darkorange",
                position: "absolute",
                right: "5vw",
                fontSize: "20px",
                border: "2px solid black",
              }}
            >
              More...
            </button>
          </div>
        );
    }
  };
  return (
    <div>
      <h2 style={{ color: "darkblue", textAlign: "center", marginTop: "4vh" }}>
        Departments
      </h2>
      <p
        style={{
          color: "darkorange",
          textAlign: "center",
          textShadow: "2px 2px 3px black",
          fontSize: "60px",
          fontWeight: "900",
        }}
      >
        Explore our programs
      </p>
      <div className="exploredepCard">
        <div className="expcse"  onClick={() => {
            setDepInfo("cse");
          }}>
          <h4>Computer Science and Engineering</h4>
        </div>
        <div
          className="expise"
          onClick={() => {
            setDepInfo("ise");
          }}
        >
          <h4>information Science and Engineering</h4>
        </div>
        <div className="expeee"  onClick={() => {
            setDepInfo("eee");
          }}>
          <h4>Electrical & Electronics Engineering</h4>
        </div>
        <div className="expece" onClick={() => {
            setDepInfo("ece");
          }}>
          <h4>Electronics and Communication</h4>
        </div>
        <div className="expmech" onClick={() => {
            setDepInfo("mech");
          }}>
          <h4>Mechanical Engineering</h4>
        </div>
        <div className="expcivil" onClick={() => {
            setDepInfo("civil");
          }}>
          <h4>Civil Engineering</h4>
        </div>
      </div>
      <h1 style={{ textAlign: "center", marginTop: "2vh" }}>Click on image</h1>
      <div className="depInfo">{pertidep()}</div>
    </div>
  );
}
