import React from "react";
import "./style.css";
import logo from "../../assets/logo-fake.jpg";

export default function Logo() {
  return (
    <>
      <div className="logo-area">
        <img src={logo} alt="logo" width="109" height="109" />
      </div>
    </>
  );
}
