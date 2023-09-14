import React, { createContext, useContext } from "react";
import { useState } from "react";
import DietCreation from "./DietCreation";
import BottomCalendar from "./BottomCalendar";
const dateContext = createContext();
// import { Toaster } from "react-hot-toast";
export default function CreateSchedule() {
  const [date, setDate] = useState(new Date().toDateString());
  const handle = (newDate) => {
    setDate({ newDate });
  };
  // var dateVar = new Date().toDateString();
  const values = { date, setDate };
  return (
    <dateContext.Provider value={values}>
      <DietCreation date={date} setDate={setDate} />
      <BottomCalendar date={date} setDate={setDate} />
    </dateContext.Provider>
  );
}
