import React from "react";
import "../css/news.css";
import NewsCard from "./NewsCard";
import workshop from "../img/workshop.jpg";

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
            <NewsCard
              heading="Three days Workshop from 14th to 16th June"
              content="Department of Computer Science & Engineering conducted three days workshop on Android application Development and Python Programming from 14th to 16th June 2023"
              imgPath={workshop}
            />
            <NewsCard
              heading="Three days Workshop from 14th to 16th June"
              content="Department of Computer Science & Engineering conducted three days workshop on Android application Development and Python Programming from 14th to 16th June 2023"
              imgPath={workshop}
            />
            <NewsCard
              heading="Three days Workshop from 14th to 16th June"
              content="Department of Computer Science & Engineering conducted three days workshop on Android application Development and Python Programming from 14th to 16th June 2023"
              imgPath={workshop}
            />
            <NewsCard
              heading="Three days Workshop from 14th to 16th June"
              content="Department of Computer Science & Engineering conducted three days workshop on Android application Development and Python Programming from 14th to 16th June 2023"
              imgPath={workshop}
            />
          </div>
      
      </div>

      <div className="companies">
        <marquee behavior="" direction="">
          <div className="companyFlex"></div>
        </marquee>
      </div>
    </div>
  );
}
