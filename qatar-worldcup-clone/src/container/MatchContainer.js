import React from "react";
import Match from "../components/Match";
import MatchSchedule from "../components/MatchSchedule";

const MatchContainer = () => {
  return (
    <div>
      <MatchSchedule />
      <Match />
    </div>
  );
};

export default MatchContainer;
