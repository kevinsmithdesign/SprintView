import React, { useEffect, useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import dayjs from "dayjs";

const times = Array.from({ length: 24 }, (_, i) => {
  const hour = i % 12 || 12;
  const ampm = i < 12 ? "AM" : "PM";
  return `${hour} ${ampm}`;
});

export default function CalendarGrid({ currentDate, selectedDate, meetings = [] }) {
  const theme = useTheme();
  const scrollContainerRef = useRef(null);

  // Generate the current week based on selected date
  const startOfWeek = selectedDate.startOf('week').add(1, 'day'); // Start from Monday
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = startOfWeek.add(i, 'day');
    return {
      name: date.format('ddd').toUpperCase(),
      date: date.date(),
      fullDate: date,
    };
  });

  // Helper function to get meetings for a specific day and time
  const getMeetingForSlot = (day, timeIndex) => {
    return meetings.find(meeting => {
      if (!meeting.date || !meeting.time) return false;
      
      const meetingDate = dayjs(meeting.date);
      const isSameDay = meetingDate.isSame(day.fullDate, 'day');
      
      if (!isSameDay) return false;
      
      // Convert time string to hour index
      const timeStr = meeting.time;
      let hour = 0;
      
      if (timeStr.includes('AM')) {
        hour = parseInt(timeStr.split(':')[0]);
        if (hour === 12) hour = 0;
      } else if (timeStr.includes('PM')) {
        hour = parseInt(timeStr.split(':')[0]);
        if (hour !== 12) hour += 12;
      }
      
      return hour === timeIndex;
    });
  };

  // Auto-scroll to current time on component mount
  useEffect(() => {
    if (scrollContainerRef.current) {
      const now = dayjs();
      const currentHour = now.hour();
      
      // Calculate the scroll position based on current time
      // Header height (100px) + (current hour * row height 80px)
      const scrollPosition = 100 + (currentHour * 80);
      
      // Scroll to current time with a slight delay to ensure DOM is ready
      setTimeout(() => {
        scrollContainerRef.current.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [selectedDate]); // Re-scroll when date changes

  return (
    <Box
      ref={scrollContainerRef}
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
        <Box sx={{ 
          borderRight: "1px solid #E6E9ED",
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 20,
          bgcolor: "#F5F9FC",
        }} />

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
              position: "sticky",
              top: 0,
              zIndex: 10,
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
        {times.map((time, timeIndex) => (
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
                position: "sticky",
                left: 0,
                zIndex: 5,
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
            {days.map((day, dayIndex) => {
              const meeting = getMeetingForSlot(day, timeIndex);
              return (
                <Box
                  key={day.name + time}
                  sx={{
                    borderTop: "1px solid #E6E9ED",
                    borderRight:
                      dayIndex !== days.length - 1 ? "1px solid #E6E9ED" : "none",
                    bgcolor: "#F5F9FC",
                    position: "relative",
                    padding: meeting ? "4px" : 0,
                  }}
                >
                  {meeting && (
                    <Box
                      sx={{
                        backgroundColor: meeting.color,
                        borderRadius: "6px",
                        padding: "8px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    >
                      <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                          color: "white",
                          fontSize: "12px",
                          lineHeight: 1.2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {meeting.title}
                      </Typography>
                      {meeting.time && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: "rgba(255,255,255,0.9)",
                            fontSize: "10px",
                            lineHeight: 1,
                          }}
                        >
                          {meeting.time}
                        </Typography>
                      )}
                    </Box>
                  )}
                </Box>
              );
            })}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
