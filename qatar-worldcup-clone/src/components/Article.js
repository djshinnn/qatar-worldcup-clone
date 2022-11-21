import React from "react";
import "./Article.css";
import { article } from "../dummy/text";
// import articleImg from "../assets/images/mainpage/article_1.jpeg";

const Article = () => {
  return (
    <div className="article__container">
      <h2 className="article__title">월드컵 소식 랭킹</h2>
      {article.map((article) => (
        <div className="article__box" key={article.id}>
          <div className="article__image--box">
            <img src={article.img} alt="" width="100px" />
          </div>
          <div className="article__num--box">
            <span>{article.id}</span>
          </div>

          <div>
            <div className="article__text--box">
              <div>{article.text}</div>
            </div>
            <div className="article__text--box sub">
              <div>{article.subText}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
