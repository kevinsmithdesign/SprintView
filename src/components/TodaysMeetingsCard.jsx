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
import PlanningIcon from "../assets/icons/PlanningIcon";
import StandUpIcon from "../assets/icons/StandUpIcon";
import RetroIcon from "../assets/icons/RetroIcon";
import ArrowUpLeftIcon from "../assets/icons/ArrowUpLeftIcon";

const TodaysMeetingsCard = ({ id, title, link, iconColor }) => {
  const theme = useTheme();

  const meetings = [
    {
      id: 1,
      title: "Stand up",
      link: "https://teamcronus.meet",
      iconColor: "#B6BAEA",
      icon: <StandUpIcon />,
    },
    {
      id: 2,
      title: "Cronus Retro",
      link: "https://teamcronus.meet",
      iconColor: "#FCD98E",
      icon: <RetroIcon />,
    },
    {
      id: 3,
      title: "Sprint Planning",
      link: "https://teamcronus.meet",
      iconColor: "#77B8A0",
      icon: <PlanningIcon />,
    },
  ];

  return (
    <Card>
      <Stack flexDirection="row" alignItems="center" mb={2}>
        <Stack flexGrow={1}>
          <Typography fontWeight="bold">TODAY'S MEETINGS</Typography>
        </Stack>
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
            "&:hover": {
              background: "#ddd",
            },
          }}
        >
          <ArrowUpLeftIcon />
        </Box>
      </Stack>

      {meetings.map((meeting) => (
        <Card
          key={meeting.id}
          sx={{
            background: "#fff",
            p: 2,
            borderRadius: "12px",
            mb: 0.5,
            cursor: "pointer",
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
            <Stack>
              <Typography variant="body2" fontWeight="bold">
                {meeting.title}
              </Typography>
              <Typography variant="body2" color={theme.palette.primary.main}>
                {meeting.link}
              </Typography>
            </Stack>
          </Stack>
        </Card>
      ))}
    </Card>
  );
};

export default TodaysMeetingsCard;
