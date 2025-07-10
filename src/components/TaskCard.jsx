import React from "react";
import {
  Card,
  Typography,
  Stack,
  Box,
  useTheme,
  Avatar,
  Chip,
  LinearProgress,
  Button,
} from "@mui/material";

const TaskCard = ({ label, variant, title, commentCount }) => {
  return (
    <Card sx={{ background: "#fff", mb: 2 }}>
      <Chip variant={variant} label={label} sx={{ mb: 1 }} />
      <Typography fontWeight="bold" mb={1.5}>
        {title}
      </Typography>
      <Avatar sx={{ mb: 4 }} />
      <Typography>{commentCount} Comments</Typography>
    </Card>
  );
};

export default TaskCard;
