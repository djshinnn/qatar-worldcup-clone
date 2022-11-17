import React from "react";
import "./RhombusContainer.css";

const RhombusContainer = ({ containerStyle, rhombusStyle, matchCount }) => {
  return (
    <>
      {matchCount === 4 ? (
        <div className="rhombus__container" style={containerStyle}>
          <div className="rhombus" style={rhombusStyle}></div>
          <div className="rhombus" style={rhombusStyle}></div>
          <div className="rhombus" style={rhombusStyle}></div>
          <div className="rhombus" style={rhombusStyle}></div>
        </div>
      ) : (
        <div className="rhombus__container" style={containerStyle}>
          <div className="rhombus" style={rhombusStyle}></div>
          <div className="rhombus" style={rhombusStyle}></div>
        </div>
      )}
    </>
  );
};

export default RhombusContainer;
