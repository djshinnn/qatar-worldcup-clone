import React from "react";

import Article from "../components/Article";
import MatchContainer from "./MatchContainer";

import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <MatchContainer />
      <Article />
    </div>
  );
};

export default Container;
