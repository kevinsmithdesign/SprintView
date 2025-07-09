import React, { useState } from "react";
import {
  Container,
  Card,
  Stack,
  Avatar,
  Box,
  Typography,
  TextField,
  useTheme,
} from "@mui/material";

const CalendarSm = () => {
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = useState(15); // Default to Wednesday (15th)

  const days = [
    { name: "MON", date: 13 },
    { name: "TUES", date: 14 },
    { name: "WED", date: 15 },
    { name: "THUR", date: 16 },
    { name: "FRI", date: 17 },
    { name: "SAT", date: 18 },
    { name: "SUN", date: 19 },
  ];

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // Here you can add logic to update page data based on selected date
    console.log(`Selected date: ${date}`);
  };

  return (
    <Card>
      <Stack flexDirection="row" alignItems="center" mb={2}>
        <Stack flexGrow={1}>
          <Typography fontWeight="bold">JUNE 2025</Typography>
        </Stack>
        <Box
          sx={{
            height: "40px",
            width: "40px",
            background: "",
            borderRadius: "50%",
          }}
        ></Box>
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {days.map((day, index) => (
          <Box
            key={day.name}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              ...(index === 0 && { alignSelf: "flex-start" }),
              ...(index === days.length - 1 && { alignSelf: "flex-end" }),
            }}
          >
            <Typography sx={{ fontSize: "12px" }} fontWeight="bold" mb={1}>
              {day.name}
            </Typography>
            <Box
              onClick={() => handleDateClick(day.date)}
              sx={{
                background:
                  selectedDate === day.date
                    ? theme.palette.primary.main
                    : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor:
                    selectedDate === day.date
                      ? theme.palette.primary.dark
                      : theme.palette.action.hover,
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: selectedDate === day.date ? "#fff" : "#000",
                  fontWeight: selectedDate === day.date ? "bold" : "normal",
                }}
              >
                {day.date}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default CalendarSm;
