import React from "react";
import { useLocation, Link } from "react-router";

import {
  Card,
  Typography,
  Stack,
  Box,
  useTheme,
  Avatar,
  LinearProgress,
  Button,
  Grid,
} from "@mui/material";
import DropdownIcon from "../assets/icons/DropdownIcon";
import User1 from "../assets/images/Users/User1.jpg";
import User2 from "../assets/images/Users/User2.jpg";
import User3 from "../assets/images/Users/User3.jpg";
import User4 from "../assets/images/Users/User4.jpg";
import User5 from "../assets/images/Users/User5.jpg";
import User6 from "../assets/images/Users/User6.jpg";

const TeamViewCard = () => {
  const theme = useTheme();

  const navigationItems = [
    { label: "Current Sprint", path: "/board" },
    { label: "Backlog", path: "/" },
  ];

  const getNavItemStyles = (path) => {
    const isActive = location.pathname === path;

    return {
      fontWeight: "SemiBold",
      p: "10px 18px",
      borderRadius: "32px",
      background: isActive ? theme.palette.primary.main : "transparent",
      display: "inline-block",
      cursor: "pointer",
      color: isActive ? "white" : "black",
      textDecoration: "none",
      marginRight: "8px",
      "&:hover": {
        background: isActive ? theme.palette.primary.main : "#f6f6f6",
        color: isActive ? "white" : "#000",
      },
    };
  };

  return (
    <Card sx={{ background: "#fff" }}>
      <Typography fontWeight="bold" mb={1.5}>
        TEAM
      </Typography>

      <Typography variant="h4" fontWeight="600">
        Cronus
      </Typography>
      <Typography
        variant="body2"
        fontWeight="600"
        color={theme.palette.secondary.main}
        mb={3}
      >
        Sprint 2 - Oct. 7th - 21st
      </Typography>
      <Stack
        flexDirection="row"
        sx={{
          mb: 2,
          "& .MuiAvatar-root": {
            border: "2px solid #F5F9FC",
            marginLeft: "-8px",
            "&:first-of-type": {
              marginLeft: 0,
            },
          },
        }}
      >
        <Avatar src={User6} />
        <Avatar src={User1} />
        <Avatar src={User3} />
        <Avatar src={User4} />
        <Avatar src={User2} />

        <Avatar src={User5} />
      </Stack>

      <LinearProgress variant="determinate" value="80" sx={{ mb: 1 }} />
      <Typography variant="body2" fontWeight="bold" mb={3}>
        Sprint progress - 72% complete
      </Typography>
      {/* <Button variant="contained">AI Assistant</Button> */}
      <Box
        sx={{
          alignItems: "center",
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
        }}
      >
        {navigationItems.map((item) => (
          <Box
            key={item.path}
            component={Link}
            to={item.path}
            sx={getNavItemStyles(item.path)}
          >
            <Typography variant="body2" fontWeight="bold">
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default TeamViewCard;
