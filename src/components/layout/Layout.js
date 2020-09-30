import React from "react";
import "./style.css";

import bg from "../../assets/bg.png";

import Requests from "../requestArea/Requests";
import Logo from "../logo/Logo";
import ConsultantArea from "../consultantArea/index";
import Content from "../content/index";

import ScheduleProvider from "../../state/requests/Provider";

export default function Layout() {
  return (
    <>
      <div
        className="grid"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover"
        }}
      >
        <ConsultantArea />
        <Logo />
        <ScheduleProvider>
          <Requests />
          <Content />
        </ScheduleProvider>
      </div>
    </>
  );
}
