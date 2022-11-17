import React, { useEffect, useState } from "react";
import axios from "axios";
import Match from "../components/Match";
import "./MatchContainer.css";
import { matchInfo } from "../dummy/text";
import useMatchInfo from "../context/matchContext";
import MatchScheduleContainer from "../components/MatchScheduleContainer";

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

  const matchFilter = ({ matchDateFirst }) => {
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
