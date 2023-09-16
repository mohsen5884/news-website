import React from "react";
import "./NewsElement.css";

const NewsElement = ({ title, description, url, urToImage }) => {
  return (
    <div className="newswebsite">
      <div className="news-element">
        <img className="news-image" src={urToImage} alt={title} />
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsElement;
