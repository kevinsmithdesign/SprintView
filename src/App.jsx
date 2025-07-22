import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

import { Container, Box, Typography, useTheme } from "@mui/material";
import Nav from "./components/Nav";

import "./App.css";

import BoardPage from "./pages/BoardPage";
import CalendarPage from "./pages/CalendarPage";
import MessagePage from "./pages/MessagePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import AiAssistantPage from "./pages/AiAssistantPage";
import AiAssistantIcon from "./assets/icons/AiAssistant";

function App() {
  const theme = useTheme();

  return (
    <>
      <Router>
        <Box
          sx={{ background: theme.palette.primary.main, p: 2, color: "White" }}
        >
          <Container>
            <Typography>
              <b>Work in Progress:</b> This prototype is actively being
              developed and updated weekly. Features may be incomplete or
              subject to change based on user feedback.
            </Typography>
          </Container>
        </Box>

        <Nav />

        <Box
          sx={{
            position: "fixed",
            bottom: 30,
            right: 80,
            zIndex: 100,
            width: "72px",
            height: "72px",
            background: theme.palette.primary.main,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            cursor: "pointer",
            "&:hover": {
              background: theme.palette.primary.dark,
            },
          }}
        >
          <AiAssistantIcon />
        </Box>

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
