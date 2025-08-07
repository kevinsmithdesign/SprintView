import React from "react";
import { Card, Stack, Box, Typography, useTheme } from "@mui/material";
import dayjs from "dayjs";

import LeftIcon from "../assets/icons/LeftIcon";
import RightIcon from "../assets/icons/RightIcon";
import ClockIcon from "../assets/icons/ClockIcon";

const CalendarSm = ({ currentDate, selectedDate, onDateSelect, onMonthChange }) => {
  const theme = useTheme();

  const daysOfWeek = ["MON", "TUES", "WED", "THUR", "FRI", "SAT", "SUN"];

  // Get the number of days in the current month
  const daysInMonth = currentDate.daysInMonth();
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = currentDate.startOf('month').day();
  // Adjust for Monday start (0 = Monday, 6 = Sunday)
  const firstDayOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const handleDateClick = (date) => {
    const newSelectedDate = currentDate.date(date);
    onDateSelect(newSelectedDate);
  };

  const handlePrevMonth = () => {
    const prevMonth = currentDate.subtract(1, 'month');
    onMonthChange(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = currentDate.add(1, 'month');
    onMonthChange(nextMonth);
  };

  return (
    <Card sx={{ p: 0 }}>
      <Box sx={{ background: "", p: "32px 32px 8px 32px" }}>
        <Stack direction="row" alignItems="center" mb={2}>
          <Typography fontWeight="bold" flexGrow={1}>
            {currentDate.format('MMMM YYYY').toUpperCase()}
          </Typography>
          <Box
            onClick={handlePrevMonth}
            sx={{
              height: "40px",
              width: "40px",
              background: "#fff",
              borderRadius: "50%",
              mr: 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              "&:hover": { background: "#ddd" },
            }}
          >
            <LeftIcon />
          </Box>
          <Box
            onClick={handleNextMonth}
            sx={{
              height: "40px",
              width: "40px",
              background: "#fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              "&:hover": { background: "#ddd" },
            }}
          >
            <RightIcon />
          </Box>
        </Stack>

        {/* Day names */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            textAlign: "center",
            mb: 1,
          }}
        >
          {daysOfWeek.map((day) => (
            <Typography key={day} fontWeight="bold" fontSize="12px">
              {day}
            </Typography>
          ))}
        </Box>

        {/* Dates grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 1,
          }}
        >
          {/* Add empty boxes for offset if the month doesn’t start on Monday */}
          {Array.from({ length: firstDayOffset }).map((_, i) => (
            <Box key={`offset-${i}`} />
          ))}

          {monthDays.map((date) => (
            <Box
              key={date}
              onClick={() => handleDateClick(date)}
              sx={{
                background:
                  selectedDate.date() === date && selectedDate.month() === currentDate.month()
                    ? theme.palette.primary.main
                    : "transparent",
                borderRadius: "50%",
                height: 40,
                width: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                margin: "0 auto",
                "&:hover": {
                  backgroundColor:
                    selectedDate.date() === date && selectedDate.month() === currentDate.month()
                      ? theme.palette.primary.dark
                      : theme.palette.action.hover,
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: selectedDate.date() === date && selectedDate.month() === currentDate.month() ? "#fff" : "#000",
                  fontWeight: selectedDate.date() === date && selectedDate.month() === currentDate.month() ? "bold" : "normal",
                }}
              >
                {date}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Optional footer */}
      <Box sx={{ background: "#EFF3FA", py: 1.5, px: 4, display: "flex" }}>
        <ClockIcon />
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center", ml: 0.5 }}
        >
          3 Days left in the sprint
        </Typography>{" "}
      </Box>
    </Card>
  );
};

export default CalendarSm;
