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

const QuickActions = ({ id, title, link, iconColor, icon }) => {
  const theme = useTheme();

  // const meetings = [
  //   {
  //     id: 1,
  //     title: "Create Story",
  //     link: "",
  //     iconColor: "#77B8A0",
  //     icon: <AddIcon />,
  //   },
  //   {
  //     id: 2,
  //     title: "Schedule Meeting",
  //     link: "",
  //     iconColor: "#F7946F",
  //     icon: <AddMeetingIcon />,
  //   },
  //   {
  //     id: 3,
  //     title: "Filter Board",
  //     link: "",
  //     iconColor: "#FCD98E",
  //     icon: <FilterIcon />,
  //   },
  //   {
  //     id: 3,
  //     title: "Add Blocker",
  //     link: "",
  //     iconColor: "#FCD98E",
  //     icon: <FilterIcon />,
  //   },
  // ];

  return (
    <>
      {/* {meetings.map(({ id, title, link, iconColor, icon }) => ( */}
      <Card
        key={id}
        sx={{
          position: "relative",
          background: "#F5F9FC",
          p: 2.5,
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
                background: iconColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </Box>
          </Stack>
          <Stack flexGrow={1} justifyContent="center">
            <Typography variant="body2" fontWeight="bold">
              {title}
            </Typography>

            <Typography variant="body2" color={theme.palette.primary.main}>
              {link}
            </Typography>
          </Stack>
          <Stack justifyContent="center">
            <ChevronRightIcon />
          </Stack>
        </Stack>
      </Card>
      {/* ))} */}
    </>
  );
};

export default QuickActions;
