import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const days = [
  { name: "MON", date: 17 },
  { name: "TUES", date: 18 },
  { name: "WED", date: 19 },
  { name: "THUR", date: 20 },
  { name: "FRI", date: 21 },
];

const times = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"];

export default function CalendarGrid() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "100px repeat(5, 1fr)",
        gridTemplateRows: "100px repeat(6, 100px)",
        // border: "1px solid #E6E9ED",
        borderRadius: "12px",
        overflow: "hidden",
        bgcolor: "#F5F9FC",
      }}
    >
      {/* Empty top-left corner */}
      <Box sx={{ borderRight: "1px solid #E6E9ED" }} />

      {/* Header days */}
      {days.map((day) => (
        <Box
          key={day.name}
          sx={{
            borderRight: "1px solid #E6E9ED",
            // borderBottom: "1px solid #e0e0e0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#F5F9FC",
          }}
        >
          <Typography fontWeight="bold" fontSize="14px" color="text.secondary">
            {day.name}
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            {day.date}
          </Typography>
        </Box>
      ))}

      {/* Time rows + grid cells */}
      {times.map((time) => (
        <React.Fragment key={time}>
          {/* Time label */}
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

          {/* Cells */}
          {days.map((day) => (
            <Box
              key={day.name + time}
              sx={{
                borderTop: "1px solid #E6E9ED",
                borderRight: "1px solid #E6E9ED",
                bgcolor: "#F5F9FC",
                // "&:hover": {
                //   bgcolor: "#eaeaea",
                //   cursor: "pointer",
                // },
              }}
            />
          ))}
        </React.Fragment>
      ))}
    </Box>
  );
}
