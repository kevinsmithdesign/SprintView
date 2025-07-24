import React from "react";
import { useLocation, Link } from "react-router";
import SprintView from "../assets/images/SprintViewLogo";
import { motion } from "framer-motion";
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
  ];

  const activeIndex = navigationItems.findIndex(
    (item) => item.path === location.pathname
  );

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {/* Logo */}
        <Box sx={{ mr: 4 }}>
          <SprintView />
        </Box>

        {/* Search */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            justifyContent: "center",
          }}
        >
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
              width: "60%",
              "& .MuiInputBase-input": {
                paddingLeft: 0,
              },
              "& .MuiInputAdornment-root": {
                marginRight: 1,
              },
            }}
          />
        </Box>

        {/* Nav Tabs */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              // background: "#F5F9FC",
              background: "red",
              borderRadius: "32px",
              p: "4px",
              height: "44px",
              overflow: "hidden",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            {/* Sliding background pill */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: `calc(${
                  activeIndex * (100 / navigationItems.length)
                }% + 4px)`,
                width: `calc(${100 / navigationItems.length}% - 8px)`,
                background: theme.palette.primary.main,
                borderRadius: "28px",
                zIndex: 1,
              }}
            />

            {/* Nav Items */}
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Box
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    flex: 1,
                    textAlign: "center",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "28px",
                    color: isActive ? "#fff" : "#000",
                    textDecoration: "none",
                    fontWeight: "bold",
                    height: "36px",
                  }}
                >
                  <Typography variant="body2">{item.label}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Avatar */}
        <Box>
          <Avatar>
            <img src={User2} alt="user profile img" height="40px" />
          </Avatar>
        </Box>
      </Box>
    </Container>
  );
};

export default Nav;
