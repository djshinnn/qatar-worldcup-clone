import React from "react";

import MatchSchedule from "../components/MatchSchedule";
import Date from "../utils/Date";

const MatchScheduleContainer = ({ matchFilter, matchDate }) => {
  return (
    <div style={{ overflow: "auto" }}>
      <MatchSchedule />
      <Date matchFilter={matchFilter} matchDate={matchDate} />
    </div>
  );
};

export default MatchScheduleContainer;
