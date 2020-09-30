import React, { useCallback, useEffect, useState, useContext } from "react";
import "./style.css";
import moment from "moment";

import Item from "./item/index";
import Header from "./header/index";
import AddItem from "./addItem/index";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import ScheduleContext from "../../state/requests/Context";

export default function Agenda() {
  const { schedule, setSchedule } = useContext(ScheduleContext);
  const [week, setWeek] = useState([]);
  const [show, setShow] = useState(false);
  const [currentDateClicked, setCurrentDateClicked] = useState("");
  const [nextWeek, setNextWeek] = useState(false);

  useEffect(() => {
    handleWeekDays();
  }, [nextWeek]);

  // console.log(schedule);

  const handleWeekDays = useCallback(() => {
    const currentDate = moment();
    const weekStart = currentDate.clone().startOf("week");
    const weekEnd = currentDate.clone().endOf("week");

    var week = [];
    for (let i = 0; i <= 6; i++) {
      week.push(
        moment(nextWeek ? weekEnd : weekStart)
          .add(i, "days")
          .format("D-dddd-DD/MM/YYYY")
      );
    }
    setWeek(week);
  }, [nextWeek]);

  const handleNewItem = useCallback(item => {
    setShow(true);
    const [, , currentDate] = item.split("-");
    setCurrentDateClicked(currentDate);
  }, []);

  // -> week =  "5-Sunday-05/07/2020", "6-Monday-06/07/2020", "7-Tuesday-07/07/2020"...

  const handleCurrentWeek = useCallback(() => {
    setNextWeek(!nextWeek);
  }, [nextWeek, setNextWeek]);

  return (
    <div className="agenda">
      {week.map((item, index) => (
        <div key={index} className="day" onClick={() => handleNewItem(item)}>
          <Header data={item} />
          <div className="content-day">
            <Item info={schedule} data={item} />
          </div>
        </div>
      ))}
      <button className="button-current-week" onClick={handleCurrentWeek}>
        {nextWeek ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
      </button>
      {show && (
        <AddItem
          show={setShow}
          date={currentDateClicked}
          setSchedule={setSchedule}
        />
      )}
    </div>
  );
}
