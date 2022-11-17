import React, { useEffect, useState } from "react";
import "./Match.css";
import MatchComponent from "../utils/MatchComponent";
import MatchComponent1 from "../utils/MatchComponent1";
import MatchComponent2 from "../utils/MatchComponent2";
import { matchInfo } from "../dummy/text";
import useMatchInfo from "../context/matchContext";

const Match = ({ data, filteredData, matchInfoData, matchDate }) => {
  const [evenData, setEvenData] = useState([]);
  const [oddData, setOddData] = useState([]);
  const { isFilter, setIsFilter } = useMatchInfo();

  useEffect(() => {
    if (data) {
      const evenData = data.filter((data, idx) => idx % 2 === 0);
      const oddData = data.filter((data, idx) => idx % 2 === 1);

      setEvenData(evenData);
      setOddData(oddData);
    }
    if (isFilter === true) {
      const evenData = filteredData.filter((data, idx) => idx % 2 === 0);
      const oddData = filteredData.filter((data, idx) => idx % 2 === 1);

      setEvenData(evenData);
      setOddData(oddData);
      setIsFilter(isFilter);
    }
  }, [data, filteredData, isFilter, setIsFilter]);

  return (
    <div>
      <div>
        {isFilter ? <h2>{matchDate}</h2> : <h2>전체 일정</h2>}

        <div style={{ display: "flex", marginTop: "30px" }}>
          <MatchComponent data={evenData} />
          {isFilter ? (
            <MatchComponent1 matchInfo={matchInfoData} />
          ) : (
            <MatchComponent1 matchInfo={matchInfo} />
          )}
          <MatchComponent2 data={oddData} />
        </div>
      </div>
    </div>
  );
};

export default Match;
