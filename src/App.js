import "./App.css";
import React from "react";
import Home from "./components/Home";
import CreateSchedule from "./components/CreateSchedule";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<CreateSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
