import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

import { Container } from "@mui/material";
import Nav from "./components/Nav";

import "./App.css";

import BoardPage from "./pages/BoardPage";
import CalendarPage from "./pages/CalendarPage";
import MessagePage from "./pages/MessagePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import AiAssistantPage from "./pages/AiAssistantPage";

function App() {
  return (
    <>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Navigate to="/board" replace />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/ai-assistant" element={<AiAssistantPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
