import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { Container, Box, Typography, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import Nav from "./components/Nav";

import "./App.css";

import BoardPage from "./pages/BoardPage";
import CalendarPage from "./pages/CalendarPage";
import MessagePage from "./pages/MessagePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import AiAssistantIcon from "./assets/icons/AiAssistant";
import AiAssistantPage from "./pages/AiAssistantPage";
import CloseIcon from "./assets/icons/CloseIcon";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const theme = useTheme();
  const [showAssistant, setShowAssistant] = useState(false);
  const [meetings, setMeetings] = useState([]);

  const toggleAssistant = () => {
    setShowAssistant((prev) => !prev);
  };

  const handleAddMeeting = (meetingData) => {
    const newMeeting = {
      id: Date.now(),
      ...meetingData,
    };
    setMeetings(prev => [...prev, newMeeting]);
  };

  const buttonStyle = {
    position: "fixed",
    bottom: 30,
    right: 80,
    zIndex: 1300,
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    background: theme.palette.primary.main,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "1.5rem",
    fontWeight: "bold",
    lineHeight: 1,
    transition: "background 0.3s ease",
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  };

  return (
    <>
      <Box
        sx={{ background: theme.palette.primary.main, p: 2, color: "White" }}
      >
        <Container>
          <Typography>
            <b>Work in Progress:</b> This prototype is actively being developed
            and updated weekly. Features may be incomplete or subject to change
            based on user feedback.
          </Typography>
        </Container>
      </Box>

      <Nav />

      {/* Toggle button */}
      <Box sx={buttonStyle} onClick={toggleAssistant}>
        {showAssistant ? <CloseIcon /> : <AiAssistantIcon />}
      </Box>

      {/* Assistant Overlay */}
      <AnimatePresence>
        {showAssistant && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "#050505",
              zIndex: 1200,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              // padding: "2rem",
            }}
          >
            <Box>
              <AiAssistantPage />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<Navigate to="/board" replace />} />
        <Route path="/board" element={<BoardPage onAddMeeting={handleAddMeeting} />} />
        <Route path="/calendar" element={<CalendarPage meetings={meetings} />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>
    </>
  );
}

export default App;
