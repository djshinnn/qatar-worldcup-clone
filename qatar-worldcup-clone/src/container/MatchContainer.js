import React, { useEffect, useState } from "react";
import axios from "axios";
import Match from "../components/Match";
import MatchSchedule from "../components/MatchSchedule";
import "./MatchContainer.css";
import { matchInfo } from "../dummy/text";

const MatchContainer = () => {
  const [data, setData] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredMatchInfo, setFilteredMatchInfo] = useState([]);
  const [isMatchDate, setIsMatchDate] = useState();

  const getData = async () => {
    await axios
      .get(`http://localhost:5050/countries`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const matchFilter = ({ matchDateFirst, isFilter }) => {
    const matchArr = data.filter(
      (match) => match.matchDateFirst === matchDateFirst
    );

    const matchInfoArr = matchInfo.filter(
      (matchInfo) => matchInfo.matchDateFirst === matchDateFirst
    );

    const matchDate = () => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].matchDateFirst === matchDateFirst) {
          return data[i].matchDateFirst;
        }
      }
    };

    setFilteredData(matchArr);
    setIsMatchDate(matchDate);
    setFilteredMatchInfo(matchInfoArr);
    setIsFilter(isFilter);
  };

  return (
    <div className="main__container">
      <MatchSchedule matchFilter={matchFilter} matchDate={isMatchDate} />
      <Match
        data={data}
        filteredData={filteredData}
        isFilter={isFilter}
        matchInfoData={filteredMatchInfo}
        matchDate={isMatchDate}
      />
    </div>
  );
};

export default MatchContainer;
