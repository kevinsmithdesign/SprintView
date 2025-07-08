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
} from "@mui/material";

const AnalyticsPage = () => {
  const theme = useTheme();

  const analyticsData = [
    {
      icon: "", // Leave blank as requested
      bgColor: "#e3f2fd", // Light blue
      title: "SPRINT VELOCITY",
      stat: "48",
      description: "Story points complete",
    },
    {
      icon: "", // Leave blank as requested
      bgColor: "#e8f5e8", // Light green
      title: "COMPLETION RATE",
      stat: "83%",
      description: "Tasks completed on time",
    },
    {
      icon: "", // Leave blank as requested
      bgColor: "#fff3e0", // Light orange
      title: "AVG CYCLE TIME",
      stat: "3.8",
      description: "Days from start to done",
    },
    {
      icon: "", // Leave blank as requested
      bgColor: "#ffebee", // Light red
      title: "ACTIVE BLOCKERS",
      stat: "2",
      description: "Tasks currently blocked",
    },
  ];

  return (
    <Container>
      <Grid container spacing={2}>
        {analyticsData.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 3 }}>
            <Card>
              <Stack flexDirection="row" alignItems="center" mb={1}>
                <Stack flexGrow={1}>
                  <Typography fontWeight="bold">{item.title}</Typography>
                </Stack>
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                    background: item.bgColor,
                    borderRadius: "50%",
                  }}
                ></Box>
              </Stack>
              <Typography variant="h1">{item.stat}</Typography>
              <Typography variant="body2" color={theme.palette.secondary.main}>
                {item.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AnalyticsPage;
