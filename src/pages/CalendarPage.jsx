import React from "react";
import {
  Grid,
  Container,
  Box,
  Card,
  Chip,
  Typography,
  Avatar,
} from "@mui/material";
import TodaysMeetingsCard from "../components/TodaysMeetingsCard";
import CalendarSm from "../components/CalendarSm";
import CalendarLg from "../components/CalendarLg";

const CalendarPage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ mb: 2 }}>
            <CalendarSm />
          </Box>
          <TodaysMeetingsCard />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <CalendarLg />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CalendarPage;
