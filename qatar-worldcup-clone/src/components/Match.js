import React, { useEffect, useState } from "react";
import "./Match.css";
import MatchComponent from "../utils/MatchComponent";
import MatchComponent1 from "../utils/MatchComponent1";
import MatchComponent2 from "../utils/MatchComponent2";
import { matchInfo } from "../dummy/text";

const Match = ({ data, filteredData, isFilter, matchInfoData, matchDate }) => {
  const [evenData, setEvenData] = useState([]);
  const [oddData, setOddData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

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
      setIsFiltered(isFilter);
    }
  }, [data, filteredData, isFilter, isFiltered]);

  return (
    <div>
      <div>
        <h2>{matchDate}</h2>

        <div style={{ display: "flex", marginTop: "30px" }}>
          <MatchComponent data={evenData} />
          {isFiltered ? (
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
