import React from "react";
import "../styles/CreateSchedule.scss";
import DietCreation from "./DietCreation";
import BottomCalendar from "./BottomCalendar";

export default function CreateSchedule() {

  return (
    <React.Fragment>
      <DietCreation />
      <BottomCalendar />
    </React.Fragment>
  );
}
