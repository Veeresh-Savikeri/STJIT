import React from "react";
import "../css/news.css";

export default function NewsCard(props) {
  return (
    <div className="newscard">
      <p>{props.heading}</p>

      <div className="newsCardContent">
        <h3>{props.content}</h3>
        <img src={props.imgPath} width="30%" />
      </div>
    </div>
  );
}
