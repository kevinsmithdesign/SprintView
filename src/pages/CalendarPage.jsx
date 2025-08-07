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

const CalendarPage = () => {
  // Initialize with current date
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (newDate) => {
    setCurrentDate(newDate);
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
          <TodaysMeetingsCard selectedDate={selectedDate} />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <CalendarLg 
            currentDate={currentDate}
            selectedDate={selectedDate}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CalendarPage;
