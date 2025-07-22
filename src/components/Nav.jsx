import React from "react";
import { useLocation, Link } from "react-router";
import SprintView from "../assets/images/SprintViewLogo";
import {
  Container,
  Avatar,
  Box,
  Typography,
  TextField,
  useTheme,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "../assets/icons/SearchIcon";

import User2 from "../assets/images/Users/User2.jpg";

const Nav = () => {
  const theme = useTheme();
  const location = useLocation();

  const navigationItems = [
    { label: "Board", path: "/board" },
    { label: "Calendar", path: "/calendar" },
    { label: "Message", path: "/message" },
    { label: "Analytics", path: "/analytics" },
    // { label: "AI Assistant", path: "/ai-assistant" },
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
    <Container sx={{ background: "", mt: 4, mb: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ mr: 6 }}>
          <SprintView />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <TextField
            placeholder="Search"
            id="outlined-start-adornment"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& .MuiInputBase-input": {
                paddingLeft: 0, // remove default left padding
              },
              "& .MuiInputAdornment-root": {
                marginRight: 1, // remove adornment right margin
              },
            }}
          />
        </Box>

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

        <Box sx={{ marginLeft: "auto" }}>
          <Avatar>
            <img src={User2} alt="user profile img" height="40px" />
          </Avatar>
        </Box>
      </Box>
    </Container>
  );
};

export default Nav;
