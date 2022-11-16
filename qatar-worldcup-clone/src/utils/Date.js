import React, { useState } from "react";
import { date } from "../dummy/text";
import "./Date.css";

const Date = ({ matchFilter, matchDate }) => {
  const [isFilter, setIsFilter] = useState(true);

  return (
    <div className="date__container">
      {date.map((date) => {
        return (
          <div
            className={
              date.matchDateFirst === matchDate
                ? "day__container day-active"
                : "day__container"
            }
            key={date.id}
            onClick={() => {
              matchFilter({
                matchDateFirst: date.matchDateFirst,
                isFilter: isFilter,
              });
              setIsFilter(true);
            }}
          >
            <div
              className={
                date.matchDateFirst === matchDate
                  ? "month__box month-active"
                  : "month__box"
              }
            >
              <span>{date.month}월</span>
            </div>
            <div
              className={
                date.matchDateFirst === matchDate
                  ? "day__box day-box-active"
                  : "day__box"
              }
            >
              <span className="day__box--date">
                <strong>{date.date}</strong>
              </span>
              <span className="day__box--day">{date.day}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Date;
