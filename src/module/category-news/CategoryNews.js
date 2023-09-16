import React, { useState, useEffect } from "react";
import NewsElement from "../news/NewsElement";
import axios from "axios";

const CategoryNews = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=tesla&from=2023-08-16&sortBy=publishedAt&apiKey=Api_Key`
      );
      setArticles(response.data.articles);
      //print the data
      console.log(response);
    };
    getArticles();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return (
          <div>
            <NewsElement
              title={article.title}
              description={article.description}
              url={article.url}
              urToImage={article.urlToImage}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryNews;
