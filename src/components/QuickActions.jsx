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

import AddIcon from "../assets/icons/AddIcon";
import AddMeetingIcon from "../assets/icons/AddMeetingIcon";
import FilterIcon from "../assets/icons/FilterIcon";
import ArrowUpLeftIcon from "../assets/icons/ArrowUpLeftIcon";

const QuickActions = () => {
  const theme = useTheme();

  const meetings = [
    {
      id: 1,
      title: "Create Story",
      link: "Create new stories, bugs, or tasks",
      iconColor: "#77B8A0",
      icon: <AddIcon />,
    },
    {
      id: 2,
      title: "Schedule Meeting",
      link: "Book ad-hoc team discussions",
      iconColor: "#F7946F",
      icon: <AddMeetingIcon />,
    },
    {
      id: 3,
      title: "Filter Board",
      link: "Apply filters to kanban view",
      iconColor: "#FCD98E",
      icon: <FilterIcon />,
    },
  ];

  return (
    <Card>
      <Stack flexDirection="row" alignItems="center" mb={2}>
        <Stack flexGrow={1}>
          <Typography fontWeight="bold">QUICK ACTIONS</Typography>
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

export default QuickActions;
