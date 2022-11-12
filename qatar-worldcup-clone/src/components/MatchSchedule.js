import React from "react";
import Date from "../utils/Date";

const MatchSchedule = () => {
  return (
    <div>
      <div>
        <button>전체</button>
        <button>조별리그</button>
        <button>토너먼트</button>
      </div>

      <div>
        <Date />
      </div>
    </div>
  );
};

export default MatchSchedule;
