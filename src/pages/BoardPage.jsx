import React, { useState } from "react";
import dayjs from "dayjs";
import { Grid, Container, Box, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import TeamViewCard from "../components/TeamViewCard";
import TodaysMeetingsCard from "../components/TodaysMeetingsCard";
import QuickActions from "../components/QuickActions";
import TaskCard from "../components/TaskCard";

import User1 from "../assets/images/Users/User1.jpg";
import User2 from "../assets/images/Users/User2.jpg";
import User3 from "../assets/images/Users/User3.jpg";
import User4 from "../assets/images/Users/User4.jpg";
import User5 from "../assets/images/Users/User5.jpg";
import User6 from "../assets/images/Users/User6.jpg";

const BoardPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container>
          <Grid container spacing={2} mb={2}>
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
                  avatars={[
                    { src: User6, alt: "User 6" },
                    { src: User1, alt: "User 1" },
                  ]}
                />
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                  avatars={[{ src: User6, alt: "User 6" }]}
                />
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                  avatars={[
                    { src: User4, alt: "User 4" },
                    { src: User2, alt: "User 2" },
                  ]}
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
                  avatars={[
                    { src: User3, alt: "User 3" },
                    { src: User2, alt: "User 2" },
                  ]}
                />
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                  avatars={[
                    { src: User6, alt: "User 6" },
                    { src: User2, alt: "User 2" },
                    { src: User5, alt: "User 5" },
                  ]}
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
                  avatars={[
                    { src: User6, alt: "User 6" },
                    { src: User3, alt: "User 3" },
                    { src: User5, alt: "User 5" },
                  ]}
                />
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                  avatars={[
                    { src: User1, alt: "User 1" },
                    { src: User2, alt: "User 2" },
                  ]}
                />
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                  avatars={[{ src: User3, alt: "User 3" }]}
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
                  avatars={[{ src: User6, alt: "User 6" }]}
                />
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                  avatars={[
                    { src: User3, alt: "User 3" },
                    { src: User2, alt: "User 2" },
                  ]}
                />
                <TaskCard
                  title="High Fidelity Checkout Mockups"
                  commentCount="2"
                  label="UI Design"
                  variant="ui-design"
                  avatars={[
                    { src: User1, alt: "User 1" },
                    { src: User2, alt: "User 2" },
                  ]}
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
