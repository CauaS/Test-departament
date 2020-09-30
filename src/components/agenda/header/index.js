import React from "react";
import "./style.css";

export default function Header({ data }) {
  const [day, weekDay] = data.split("-");
  function handleTranlationWeekDay() {
    switch (weekDay) {
      case "Sunday":
        return <span>Domingo</span>;
      case "Monday":
        return <span>Segunda</span>;
      case "Tuesday":
        return <span>Terça</span>;
      case "Wednesday":
        return <span>Quarta</span>;
      case "Thursday":
        return <span>Quinta</span>;
      case "Friday":
        return <span>Sexta</span>;
      case "Saturday":
        return <span>Sábado</span>;
      default:
        return "";
    }
  }
  return (
    <div className="header" key={data}>
      <span>{handleTranlationWeekDay()}</span>
      <span className="day-number">{day >= 10 ? day : `0${day}`}</span>
    </div>
  );
}
