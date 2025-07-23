import React, { useState } from "react";
import { useLocation, Link } from "react-router";
import { motion } from "framer-motion";

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
  const [activeTab, setActiveTab] = useState("sprint");

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
      <Box
        sx={{
          position: "relative",
          display: { xs: "none", md: "flex" },
          background: "#F5F9FC",
          borderRadius: "32px",
          p: "4px",
          width: "100%", // Full width of parent card
          overflow: "hidden",
        }}
      >
        {/* Sliding pill background */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: activeTab === "sprint" ? "4px" : "50%",
            width: "50%",
            background: theme.palette.primary.main,
            borderRadius: 999,
            zIndex: 1,
          }}
        />

        {/* Sprint Tab */}
        <Box
          component={Link}
          onClick={() => setActiveTab("sprint")}
          sx={{
            flex: 1,
            textAlign: "center",
            zIndex: 2,
            p: "12px 18px",
            cursor: "pointer",
            textDecoration: "none",
            borderRadius: "32px",
            color: activeTab === "sprint" ? "#fff" : "#000",
          }}
        >
          <Typography variant="body2" fontWeight="bold">
            Current Sprint
          </Typography>
        </Box>

        {/* Backlog Tab */}
        <Box
          component={Link}
          onClick={() => setActiveTab("backlog")}
          sx={{
            flex: 1,
            textAlign: "center",
            zIndex: 2,
            p: "12px 18px",
            cursor: "pointer",
            textDecoration: "none",
            borderRadius: "32px",
            color: activeTab === "backlog" ? "#fff" : "#000",
          }}
        >
          <Typography variant="body2" fontWeight="bold">
            Backlog
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default TeamViewCard;
