import React, { useEffect, useState } from "react";
import axios from "axios";
import Match from "../components/Match";
import MatchSchedule from "../components/MatchSchedule";

const MatchContainer = () => {
  const [data, setData] = useState();

  const getData = async () => {
    await axios
      .get(`http://localhost:5050/countries`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div>
      <MatchSchedule />
      <Match data={data} />
    </div>
  );
};

export default MatchContainer;
