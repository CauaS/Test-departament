import React from "react";

import moment from "moment";
import {
  AiFillCheckCircle,
  AiFillWarning,
  AiFillClockCircle
} from "react-icons/ai";

import "./style.css";

export default function Item(props) {
  const [, , dateRegister] = props.data.split("-");

  function handleIcon(type, color) {
    switch (type) {
      case "início":
        return <AiFillCheckCircle size={20} color={color} />;
      case "limite":
        return <AiFillWarning size={20} color={color} />;
      case "schedule":
        return <AiFillClockCircle size={20} color={color} />;
      default:
        return;
    }
  }
  const currentDate = moment();
  const weekStart = currentDate.clone().startOf("today");
  const today = moment(weekStart).format("DD/MM/YYYY");

  return (
    <>
      {props.info.map((scheadule, index) => {
        return scheadule.schedules.map((item, index) => {
          if (dateRegister === item.date) {
            return (
              <div
                key={index}
                className="item"
                style={{
                  borderLeftColor: dateRegister >= today ? item.color : "gray"
                }}
              >
                {dateRegister >= today
                  ? handleIcon(item.type, item.color)
                  : handleIcon(item.type, "gray")}
                <span>{item.number}</span>
                <div className="tooltiptext">
                  {scheadule.schedules.map(itemSchedule =>
                    itemSchedule.reason ? itemSchedule.reason : null
                  )}
                </div>
              </div>
            );
          }
        });
      })}
    </>
  );
}
