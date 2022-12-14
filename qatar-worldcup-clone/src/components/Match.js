import React, { useEffect, useState } from "react";

import LeftMatchComponent from "../utils/LeftMatchComponent";
import MatchInfoComponent from "../utils/MatchInfoCompoennt";
import RightMatchComponent from "../utils/RightMatchComponent";
import useMatchInfo from "../context/matchContext";
import { matchInfo } from "../dummy/text";

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
      <div style={{ padding: "0 20px" }}>
        {isFilter ? <h2>{matchDate}</h2> : <h2>전체 일정</h2>}

        <div style={{ display: "flex", marginTop: "30px" }}>
          <LeftMatchComponent data={evenData} />
          {isFilter ? (
            <MatchInfoComponent matchInfo={matchInfoData} />
          ) : (
            <MatchInfoComponent matchInfo={matchInfo} />
          )}
          <RightMatchComponent data={oddData} />
        </div>
      </div>
    </div>
  );
};

export default Match;
