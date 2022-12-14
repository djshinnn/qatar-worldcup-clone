import React from "react";
import { Link } from "react-router-dom";

import useMatchInfo from "../context/matchContext";

import "./MatchComponent.css";

const MatchInfoComponent = ({ matchInfo }) => {
  const { isFilter } = useMatchInfo();

  return (
    <div style={{ flex: "1" }}>
      {isFilter ? (
        <div>
          {matchInfo.map((data, idx) => (
            <div className="info__container" key={data.id}>
              <h4>* {data.group} *</h4>
              <div className="info__box">
                {data.month}.{data.date}. {data.time}
              </div>
              <div>경기전</div>
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
      ) : (
        <div>
          {matchInfo
            .filter(
              (data, idx) =>
                data.matchDateFirst === "11.21." ||
                data.matchDateFirst === "11.22." ||
                data.matchDateFirst === "11.23." ||
                data.matchDateFirst === "11.24." ||
                data.matchDateFirst === "11.25."
            )
            .map((data, idx) => (
              <div className="info__container" key={data.id}>
                <h4>* {data.group} *</h4>
                <div className="info__box">
                  {data.month}.{data.date}. {data.time}
                </div>
                <div>경기전</div>
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
      )}
    </div>
  );
};

export default MatchInfoComponent;
