import React from "react";
import "./MatchComponent.css";
import { Link } from "react-router-dom";

const MatchComponent = ({ matchInfo }) => {
  return (
    <div>
      {matchInfo.map((data, idx) => (
        <div className="info__container" key={data.id}>
          <h4>* {data.group} *</h4>
          <div className="info__box">
            {data.month}.{data.date}. {data.time} 경기전
          </div>
          <div className="preview__container">
            <div className="preview__rhombus left"></div>
            <div className="preview__box">
              <Link to="/preview">
                <span className="preview__text">프리뷰 &gt;</span>
              </Link>
            </div>
            <div className="preview__rhombus right"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchComponent;
