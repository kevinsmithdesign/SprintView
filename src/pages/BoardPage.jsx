import React, { useState } from "react";
import dayjs from "dayjs";
import {
  Grid,
  Container,
  Box,
  Card,
  Chip,
  Typography,
  Avatar,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import TeamViewCard from "../components/TeamViewCard";
import TodaysMeetingsCard from "../components/TodaysMeetingsCard";
import CalendarSm from "../components/CalendarSm";
import QuickActions from "../components/QuickActions";
import TaskCard from "../components/TaskCard";

const BoardPage = () => {
  const meetings = [
    {
      id: 1,
      title: "Stand up",
      link: "https://teamcronus.meet",
      iconColor: "#4971f4",
    },
    {
      id: 2,
      title: "Design Review",
      link: "https://teamcronus.meet",
      iconColor: "#f50057",
    },
    {
      id: 3,
      title: "Client Demo",
      link: "https://teamcronus.meet",
      iconColor: "#00c853",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container>
          <Grid container spacing={2} mb={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <TeamViewCard />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TodaysMeetingsCard />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <QuickActions />
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            background: "#F5F9FC",
            py: 4,
            flex: 1,
          }}
        >
          <Container>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography fontWeight="bold" mb={1.5}>
                  TODO
                </Typography>
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                />
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                />
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography fontWeight="bold" mb={1.5}>
                  IN PROGRESS
                </Typography>
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UX Design"
                  variant="ux-design"
                />
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography fontWeight="bold" mb={1.5}>
                  REVIEW
                </Typography>
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="Front-End"
                  variant="front-end"
                />
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                />
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography fontWeight="bold" mb={1.5}>
                  DONE
                </Typography>
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="Back-End"
                  variant="back-end"
                />
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                />
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </LocalizationProvider>
    </Box>
  );
};

export default BoardPage;
