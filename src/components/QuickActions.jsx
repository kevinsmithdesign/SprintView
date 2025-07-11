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
import DropdownIcon from "../assets/icons/DropdownIcon";
import ChevronRightIcon from "../assets/icons/ChevronRight";

const QuickActions = () => {
  const theme = useTheme();

  const meetings = [
    {
      id: 1,
      title: "Create Story",
      link: "",
      iconColor: "#77B8A0",
      icon: <AddIcon />,
    },
    {
      id: 2,
      title: "Schedule Meeting",
      link: "",
      iconColor: "#F7946F",
      icon: <AddMeetingIcon />,
    },
    {
      id: 3,
      title: "Filter Board",
      link: "",
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
          <DropdownIcon />
        </Box>
      </Stack>

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
            <Stack flexGrow={1} justifyContent="center">
              <Typography variant="body2" fontWeight="bold">
                {meeting.title}
              </Typography>

              <Typography variant="body2" color={theme.palette.primary.main}>
                {meeting.link}
              </Typography>
            </Stack>
            <Stack justifyContent="center">
              <ChevronRightIcon />
            </Stack>
          </Stack>
        </Card>
      ))}
    </Card>
  );
};

export default QuickActions;
