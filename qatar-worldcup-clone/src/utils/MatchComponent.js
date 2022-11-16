import React from "react";
import "./MatchComponent.css";

const MatchComponent = ({ data }) => {
  return (
    <div>
      {data.map((data, idx) => (
        <div className="match__container" key={data.id}>
          <div className="record__container left">
            <div>
              <div>{data.country}</div>
              <div className="record">0승 0무 0패</div>
            </div>
            <div>
              <img src={data.img} alt="" width="60px" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchComponent;