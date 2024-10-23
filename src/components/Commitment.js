import React from "react";
import stjit from "../img/stjit.jpg";
import "../css/commitment.css";

export default function Commitment() {
  return (
    <div className="commitmentContainer">
      <p className="welcome">WELCOME TO OUR COLLEGE</p>
      <div className="commitment">
        <h1>A Commitment to Technical Education</h1>
        <div className="commitmentCard">
          <div className="commitmentPto">
            <img src={stjit} width="100%" height="90%" />
          </div>
          <div className="commitmentInfo">
            <p>
              The real catalyst, which plays important role in shaping the
              career of a student, is the place of study and its surroundings.
              Infrastructure of STJ Institute of Technology is at a serene
              environment on the outskirts of Ranebennur attracts one and all.
              The campus of the institute extends over an area of 52 acres of
              land, specially selected to keep the students away from the
              vitiated atmosphere of city life. Campus is extensively landscaped
              with green environment. Established in the year 1980. The college
              is affiliated to Visveswaraiah Technological University, Approved
              by All India Council for Technical Education and by the Government
              of Karnataka. Ranebennur is situated in Haveri District of
              Karnataka, on Poona Bangalore National Highway (NH-4). 295km from
              Bangalore and 100km from Dharwad. It can be easily reached either
              by Road or by Rail. Bus frequency from Bangalore to Ranebennur is
              very high. The Institute is situated at 3km from the Ranebennur
              Bus Station. The climate throughout the year is mild and
              salubrious.
            </p>
          </div>
        </div>
      </div>

      <div className="homeInfo">
        <div className="visionMisson">
          <div className="visionCard">
            <h1 className="visionHeading">Vision</h1>
            <div className="vision">
              <p>
                Aims at developing STJIT as a premier technical institution by
                excelling in every aspect of technical education.
              </p>
            </div>
          </div>

          <div className="visionCard ">
            <h1 className="visionHeading">Mission</h1>
            <div className="vision">
              <p>
                Imparting technical education and training in response to the
                changing needs of industry and society, believing in quality,
                innovation, ethical and moral standards.
              </p>
            </div>
          </div>
        </div>
        <div className="ourStregth">
          <div className="stregthCard">
            <h1 className="stregthHeading">Our Stregth</h1>
            <div className="stregth">
              <ul>
                <li>Student : 2000</li>
                <li>Teacher : 135</li>
                <li>UG Programmers : 6</li>
                <li>Placements : 186+</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
