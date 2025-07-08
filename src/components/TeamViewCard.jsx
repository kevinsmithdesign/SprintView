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

const TeamViewCard = () => {
  const theme = useTheme();

  return (
    <Card>
      <Stack flexDirection="row" alignItems="center">
        <Stack flexGrow={1}>
          <Typography fontWeight="bold">TEAM</Typography>
        </Stack>
        <Box
          sx={{
            height: "40px",
            width: "40px",
            background: "#fff",
            borderRadius: "50%",
          }}
        ></Box>
      </Stack>
      <Typography variant="h4" fontWeight="600">
        Cronus
      </Typography>
      <Typography variant="h6" color={theme.palette.secondary.main} mb={1}>
        Sprint 2
      </Typography>
      <Avatar sx={{ mb: 2 }} />
      <LinearProgress variant="determinate" value="80" sx={{ mb: 1 }} />
      <Typography fontWeight="bold" mb={2}>
        Sprint progress - 72% complete
      </Typography>
      <Button variant="contained">AI Assistant</Button>
    </Card>
  );
};

export default TeamViewCard;
