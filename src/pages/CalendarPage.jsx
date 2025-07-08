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

const CalendarPage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <TodaysMeetingsCard />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>future calendar</Grid>
      </Grid>
    </Container>
  );
};

export default CalendarPage;
