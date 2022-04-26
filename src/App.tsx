import React from "react";

import "./App.css";

import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import TimeEntryPage from "./pages/TimeEntryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/timeEntry/:id" element={<TimeEntryPage />} />
    </Routes>
  );
}

export default App;
