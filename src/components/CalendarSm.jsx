import React, { useState } from "react";
import { Card, Stack, Box, Typography, useTheme } from "@mui/material";

import LeftIcon from "../assets/icons/LeftIcon";
import RightIcon from "../assets/icons/RightIcon";
import ClockIcon from "../assets/icons/ClockIcon";
const CalendarSm = () => {
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = useState(16); // default to 16th

  const daysOfWeek = ["MON", "TUES", "WED", "THUR", "FRI", "SAT", "SUN"];

  // Example: June 2025 starts on Sunday → we'll align accordingly.
  const monthDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const firstDayOffset = 0; // Adjust if June starts on a different weekday

  const handleDateClick = (date) => {
    setSelectedDate(date);
    console.log(`Selected date: ${date}`);
  };

  return (
    <Card sx={{ p: 0 }}>
      <Box sx={{ background: "", p: "32px 32px 8px 32px" }}>
        <Stack direction="row" alignItems="center" mb={2}>
          <Typography fontWeight="bold" flexGrow={1}>
            JUNE 2025
          </Typography>
          <Box
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
                  selectedDate === date
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
                    selectedDate === date
                      ? theme.palette.primary.dark
                      : theme.palette.action.hover,
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: selectedDate === date ? "#fff" : "#000",
                  fontWeight: selectedDate === date ? "bold" : "normal",
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
