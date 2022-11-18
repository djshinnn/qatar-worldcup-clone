import React from "react";
import "./MatchComponent.css";

const MatchComponent = ({ data }) => {
  return (
    <div>
      {data.map((data, idx) => (
        <div className="match__container2" key={data.id}>
          <div className="record__container right">
            <div style={{ marginRight: "10px" }}>
              <img src={data.img} alt="" width="80px" />
            </div>
            <div className="record__box record__box--right">
              <div>{data.country}</div>
              <div className="record">
                {data.win}승 {data.draw}무 {data.lose}패
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchComponent;
