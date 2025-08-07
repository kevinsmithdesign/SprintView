import React, { useState } from "react";
import {
  Grid,
  Container,
  Box,
  Card,
  Chip,
  Typography,
  Avatar,
} from "@mui/material";
import dayjs from "dayjs";
import TodaysMeetingsCard from "../components/TodaysMeetingsCard";
import CalendarSm from "../components/CalendarSm";
import CalendarLg from "../components/CalendarLg";
import ScheduleMeetingDialog from "../components/ScheduleMeetingDialog";

const CalendarPage = ({ meetings = [], onAddMeeting }) => {
  // Initialize with current date
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [openScheduleMeetingDialog, setOpenScheduleMeetingDialog] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (newDate) => {
    setCurrentDate(newDate);
  };

  const handleScheduleMeeting = (meetingData) => {
    console.log("Meeting scheduled:", meetingData);
    // Add meeting to the centralized state via the callback
    if (onAddMeeting) {
      onAddMeeting(meetingData);
    }
    // Since we're already on the calendar page, no redirect needed
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ mb: 2 }}>
            <CalendarSm 
              currentDate={currentDate}
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              onMonthChange={handleMonthChange}
            />
          </Box>
          <TodaysMeetingsCard 
            selectedDate={selectedDate} 
            onScheduleMeeting={() => setOpenScheduleMeetingDialog(true)}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <CalendarLg 
            currentDate={currentDate}
            selectedDate={selectedDate}
            meetings={meetings}
          />
        </Grid>
      </Grid>

      {openScheduleMeetingDialog && (
        <ScheduleMeetingDialog
          openScheduleMeetingDialog={openScheduleMeetingDialog}
          setOpenScheduleMeetingDialog={setOpenScheduleMeetingDialog}
          onScheduleMeeting={handleScheduleMeeting}
        />
      )}
    </Container>
  );
};

export default CalendarPage;
