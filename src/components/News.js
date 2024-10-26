import React from "react";
import "../css/news.css";
import NewsCard from "./NewsCard";
import workshop from "../img/workshop.jpg";
import IBM from "../img/IBM.png";
import NTT from '../img/NTT.jpg'
import INFO from '../img/INFO.png';
import CONG from '../img/CONG.png'
import GRAD from '../img/GRAD.png'
import PIN from '../img/PIN.png'
import PREST from '../img/PREST.png'
import SLK from '../img/SLK.jpg'
import TECK from '../img/TECK.png'
import VEE from '../img/VEE.jpg'
import wipro from '../img/wipro.jpg'



export default function News() {
  return (
    <div className="marquees">
      <div className="newsMarquee">
        <h1 className="newsHeading">Latest Events & News</h1>

        <div className="newsFlex">
          <NewsCard
            heading="Three days Workshop from 14th to 16th June"
            content="Department of Computer Science & Engineering conducted three days workshop on Android application Development and Python Programming from 14th to 16th June 2023"
            imgPath={workshop}
          />
        </div>
      </div>
      <h1 className="newsHeading">OUR REQUIREMENTS</h1>
      <div className="companies">
        <div className="companiesImg">
          <img src={IBM} alt="" />
          <img src={NTT} alt="" />
          <img src={INFO} alt="" />
          <img src={CONG} alt="" />
          <img src={GRAD} alt="" />
          <img src={PREST} alt="" />
          <img src={PIN} alt="" />
          <img src={SLK} alt="" />
          <img src={TECK} alt="" />
          <img src={VEE} alt="" />
          <img src={wipro} alt="" />
          <img src={IBM} alt="" />
          <img src={NTT} alt="" />
          <img src={INFO} alt="" />
          <img src={CONG} alt="" />
          <img src={GRAD} alt="" />
          <img src={PREST} alt="" />
          <img src={PIN} alt="" />
          <img src={SLK} alt="" />
          <img src={TECK} alt="" />
          <img src={VEE} alt="" />
          <img src={wipro} alt="" />
        </div>
        
      </div>
    </div>
  );
}
