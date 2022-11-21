import React, { useEffect, useState } from "react";
import axios from "axios";

import Match from "../components/Match";
import useMatchInfo from "../context/matchContext";
import MatchScheduleContainer from "../container/MatchScheduleContainer";
import { matchInfo } from "../dummy/text";

import "./MatchContainer.css";

const MatchContainer = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredMatchInfo, setFilteredMatchInfo] = useState([]);
  const [isMatchDate, setIsMatchDate] = useState();

  const { isFilter, setIsFilter } = useMatchInfo();

  const getData = async () => {
    await axios
      .get(`http://localhost:5050/countries`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const matchFilter = ({ matchDateFirst, matchDateSecond, matchDateThird }) => {
    console.log({ matchDateFirst, matchDateSecond, matchDateThird });

    const matchDate = () => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].matchDateFirst === matchDateFirst) {
          const matchArr = data.filter(
            (match) => match.matchDateFirst === matchDateFirst
          );
          const matchInfoArr = matchInfo.filter(
            (matchInfo) => matchInfo.matchDateFirst === matchDateFirst
          );

          setFilteredData(matchArr);
          setFilteredMatchInfo(matchInfoArr);

          return data[i].matchDateFirst;
        }
        if (data[i].matchDateSecond === matchDateSecond) {
          const matchArr = data.filter(
            (match) => match.matchDateSecond === matchDateSecond
          );
          const matchInfoArr = matchInfo.filter(
            (matchInfo) => matchInfo.matchDateSecond === matchDateSecond
          );

          setFilteredData(matchArr);
          setFilteredMatchInfo(matchInfoArr);

          return data[i].matchDateSecond;
        }
        if (data[i].matchDateThird === matchDateThird) {
          const matchArr = data.filter(
            (match) => match.matchDateThird === matchDateThird
          );
          const matchInfoArr = matchInfo.filter(
            (matchInfo) => matchInfo.matchDateThird === matchDateThird
          );

          setFilteredData(matchArr);
          setFilteredMatchInfo(matchInfoArr);

          return data[i].matchDateThird;
        }
      }
    };

    setIsMatchDate(matchDate);
    setIsFilter(isFilter);
  };

  return (
    <div className="main__container">
      <MatchScheduleContainer
        matchFilter={matchFilter}
        matchDate={isMatchDate}
      />
      <Match
        data={data}
        filteredData={filteredData}
        matchInfoData={filteredMatchInfo}
        matchDate={isMatchDate}
      />
    </div>
  );
};

export default MatchContainer;
