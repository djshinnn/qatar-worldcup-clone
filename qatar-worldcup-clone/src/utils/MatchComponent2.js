import React from "react";
import "./MatchComponent.css";

const MatchComponent = ({ data }) => {
  return (
    <div>
      {data.map((data, idx) => (
        <div className="match__container2" key={data.id}>
          <div className="record__container right">
            <div>
              <img src={data.img} alt="" width="80px" />
            </div>
            <div>
              <div>{data.country}</div>
              <div className="record">0승 0무 0패</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchComponent;
