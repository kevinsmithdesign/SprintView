import React from "react";
import {
  Grid,
  Container,
  Box,
  Card,
  Chip,
  Typography,
  Stack,
  Avatar,
  useTheme,
  LinearProgress,
} from "@mui/material";

const TeamMemberStats = ({
  name,
  jobTitle,
  complete,
  tasks,
  points,
  blockers,
}) => {
  const theme = useTheme();

  return (
    <Card>
      <Stack flexDirection="row" mb={2}>
        <Stack>
          <Box
            sx={{
              height: "42px",
              width: "42px",
              borderRadius: "50%",
              background: "#ddd",
              mr: 1.5,
            }}
          />
        </Stack>
        <Stack>
          <Typography fontWeight="bold">{name}</Typography>
          <Typography variant="body2" color={theme.palette.secondary.main}>
            {jobTitle}
          </Typography>
        </Stack>
      </Stack>

      <Stack flexDirection="row" alignItems="center" mb={1}>
        <Typography variant="h1" mr={1.5}>
          {complete}
        </Typography>
        <Typography fontWeight="bold" color={theme.palette.secondary.main}>
          Complete
        </Typography>
      </Stack>

      <LinearProgress variant="determinate" value="80" sx={{ mb: 2 }} />

      <Box
        sx={{
          background: "#fff",
          py: 1,
          px: 1.5,
          borderRadius: "6px",
          display: "flex",
          mb: 0.5,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body2" fontWeight="bold">
            Tasks
          </Typography>
        </Box>
        <Typography variant="body2" fontWeight="bold">
          {tasks}
        </Typography>
      </Box>
      <Box
        sx={{
          background: "#fff",
          py: 1,
          px: 1.5,
          borderRadius: "6px",
          display: "flex",
          mb: 0.5,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body2" fontWeight="bold">
            Points
          </Typography>
        </Box>
        <Typography variant="body2" fontWeight="bold">
          {points}
        </Typography>
      </Box>
      <Box
        sx={{
          background: "#fff",
          py: 1,
          px: 1.5,
          borderRadius: "6px",
          display: "flex",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body2" fontWeight="bold">
            Blockers
          </Typography>
        </Box>
        <Typography variant="body2" fontWeight="bold">
          {blockers}
        </Typography>
      </Box>
    </Card>
  );
};

export default TeamMemberStats;
