import React from "react";
import {
  Card,
  Typography,
  Stack,
  Box,
  useTheme,
  Avatar,
  LinearProgress,
  Button,
} from "@mui/material";
import dayjs from "dayjs";
import PlanningIcon from "../assets/icons/PlanningIcon";
import StandUpIcon from "../assets/icons/StandUpIcon";
import RetroIcon from "../assets/icons/RetroIcon";
import ArrowUpLeftIcon from "../assets/icons/ArrowUpLeftIcon";
import ChevronRightIcon from "../assets/icons/ChevronRight";

const TodaysMeetingsCard = ({ selectedDate, onScheduleMeeting }) => {
  const theme = useTheme();

  const meetings = [
    {
      id: 1,
      title: "Stand up",
      time: "9:30 A.M.",
      iconColor: "#B6BAEA",
      icon: <StandUpIcon />,
    },
    {
      id: 2,
      title: "Cronus Retro",
      time: "9:45 A.M.",
      iconColor: "#FCD98E",
      icon: <RetroIcon />,
    },
    {
      id: 3,
      title: "Sprint Planning",
      time: "2:00 P.M.",
      iconColor: "#77B8A0",
      icon: <PlanningIcon />,
    },
  ];

  return (
    <Card sx={{ mb: 6 }}>
      <Stack flexDirection="row" alignItems="center" mb={2}>
        <Stack flexGrow={1}>
          <Typography fontWeight="bold">
            {selectedDate && dayjs(selectedDate).isSame(dayjs(), "day")
              ? "TODAY'S MEETINGS"
              : `${selectedDate.format("MMM D").toUpperCase()} MEETINGS`}
          </Typography>
        </Stack>
        <Box
          sx={{
            height: "40px",
            width: "40px",
            // background: "#fff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            // "&:hover": {
            //   background: "#ddd",
            // },
          }}
        >
          {/* <ArrowUpLeftIcon /> */}
        </Box>
      </Stack>

      <Box mb={2}>
        {meetings.map((meeting) => (
          <Card
            key={meeting.id}
            sx={{
              position: "relative",
              background: "#fff",
              p: 2,
              borderRadius: "12px",
              mb: 0.5,
              cursor: "pointer",
              overflow: "hidden",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: theme.palette.primary.main,
                opacity: 0,
                transition: "opacity 0.3s ease",
              },
              "&:hover::after": {
                opacity: 0.2, // adjust to your desired overlay strength
              },
            }}
          >
            <Stack flexDirection="row" gap={2}>
              <Stack>
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "6px",
                    background: meeting.iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {meeting.icon}
                </Box>
              </Stack>
              <Stack flexGrow={1}>
                <Typography variant="body2" fontWeight="bold">
                  {meeting.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "12px" }}
                  color={theme.palette.secondary.main}
                >
                  {meeting.time}
                </Typography>
              </Stack>
              <Stack justifyContent="center">
                <ChevronRightIcon />
              </Stack>
            </Stack>
          </Card>
        ))}
      </Box>

      <Button 
        variant="contained" 
        fullWidth 
        sx={{ mb: 0.5 }}
        onClick={onScheduleMeeting}
      >
        Schedule Meeting
      </Button>
      <Button
        variant="outlined"
        sx={{ background: "#fff", border: "none" }}
        fullWidth
      >
        Meet Now
      </Button>
    </Card>
  );
};

export default TodaysMeetingsCard;
