import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const days = [
  { name: "MON", date: 17 },
  { name: "TUES", date: 18 },
  { name: "WED", date: 19 },
  { name: "THUR", date: 20 },
  { name: "FRI", date: 21 },
  { name: "SAT", date: 22 },
  { name: "SUN", date: 23 },
];

const times = Array.from({ length: 24 }, (_, i) => {
  const hour = i % 12 || 12;
  const ampm = i < 12 ? "AM" : "PM";
  return `${hour} ${ampm}`;
});

export default function CalendarGrid() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "calc(100vh - 150px)", // Adjust to match layout
        overflow: "auto",
        borderRadius: "12px",
        bgcolor: "#F5F9FC",
      }}
    >
      <Box
        sx={{
          minWidth: "1000px", // Ensure horizontal scroll shows all days
          display: "grid",
          gridTemplateColumns: "100px repeat(7, 1fr)", // All days same width
          gridTemplateRows: `100px repeat(24, 80px)`, // 24 hours
        }}
      >
        {/* Empty top-left corner */}
        <Box sx={{ borderRight: "1px solid #E6E9ED" }} />

        {/* Day Headers */}
        {days.map((day, index) => (
          <Box
            key={day.name}
            sx={{
              borderRight:
                index !== days.length - 1 ? "1px solid #E6E9ED" : "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#F5F9FC",
            }}
          >
            <Typography
              fontWeight="bold"
              fontSize="14px"
              color="text.secondary"
            >
              {day.name}
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {day.date}
            </Typography>
          </Box>
        ))}

        {/* Time Labels + Grid Cells */}
        {times.map((time) => (
          <React.Fragment key={time}>
            {/* Time Label */}
            <Box
              sx={{
                borderTop: "1px solid #E6E9ED",
                borderRight: "1px solid #E6E9ED",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#F5F9FC",
              }}
            >
              <Typography
                fontSize="14px"
                fontWeight="bold"
                color="text.secondary"
              >
                {time}
              </Typography>
            </Box>

            {/* Time Cells for Each Day */}
            {days.map((day, index) => (
              <Box
                key={day.name + time}
                sx={{
                  borderTop: "1px solid #E6E9ED",
                  borderRight:
                    index !== days.length - 1 ? "1px solid #E6E9ED" : "none",
                  bgcolor: "#F5F9FC",
                }}
              />
            ))}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
