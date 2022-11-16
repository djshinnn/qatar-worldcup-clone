import React from "react";
import "./MatchComponent.css";
import { Link } from "react-router-dom";

const MatchComponent = ({ matchInfo }) => {
  return (
    <div>
      {matchInfo.map((data, idx) => (
        <div className="info__container" key={data.id}>
          <h4>* {data.group} *</h4>
          <div>
            {data.month}.{data.date}. {data.time} 경기전
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="preview__rhombus left"></div>
            <div className="preview__container">
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
