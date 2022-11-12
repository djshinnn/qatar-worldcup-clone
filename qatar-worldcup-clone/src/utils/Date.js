import React from "react";
import { date } from "../dummy/text";
import "./Date.css";

const Date = () => {
  return (
    <div className="date__container">
      {date.map((date) => {
        return (
          <div className="day__container" key={date.id}>
            <div>
              <span>{date.month}월</span>
            </div>
            <div>
              <span>{date.date}</span>
              <span>{date.day}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Date;
