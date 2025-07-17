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
  TextField,
  InputAdornment,
  IconButton,
  useTheme,
} from "@mui/material";
import DocumentIcon from "../assets/icons/DocumentIcon";
import AddDocIcon from "../assets/icons/AddDoc";
import SearchIcon from "../assets/icons/SearchIcon";
import SendMsgIcon from "../assets/icons/SendMsgIcon";
import EmojiIcon from "../assets/icons/EmojiIcon";
import MicIcon from "../assets/icons/MicIcon";
import MessageLeftNav from "../components/MessageLeftNav";
import SprintProgressIcon from "../assets/icons/SprintProgressIcon";
import WarningIcon from "../assets/icons/WarningIcon";
import ChartIcon from "../assets/icons/ChartIcon";
import TeamWorkloadIcon from "../assets/icons/TeamWorkloadIcon";

const AiAssistantPage = () => {
  const theme = useTheme();

  const quickActions = [
    { id: 1, name: "Sprint Progress", icon: <SprintProgressIcon /> },
    { id: 2, name: "Standup Summary", icon: <DocumentIcon /> },
    { id: 3, name: "Current Blockers", icon: <WarningIcon /> },
    { id: 4, name: "Velocity Analysis", icon: <ChartIcon /> },
    { id: 5, name: "Team Workload", icon: <TeamWorkloadIcon /> },
  ];

  const recentConvo = [
    { id: 1, name: "Sprint Progress Analysis" },
    { id: 2, name: "Team Velocity Insights" },
    { id: 4, name: "Retrospective Action Items" },
    { id: 5, name: "API Documentation Review" },
    { id: 6, name: "User Story Refinement" },
    { id: 7, name: "Bug Triage Meeting Notes" },
    { id: 8, name: "Sprint Planning Estimates" },
    { id: 11, name: "Testing Strategy Discussion" },
    { id: 12, name: "Performance Optimization" },
    { id: 13, name: "Client Feedback Analysis" },
    { id: 14, name: "Feature Flag Configuration" },
    { id: 15, name: "Daily Standup Summary" },
    // { id: 16, name: "Sprint Goals Alignment" },
    // { id: 17, name: "Technical Debt Review" },
    // { id: 18, name: "QA Test Case Updates" },
    // { id: 19, name: "Sprint Demo Preparation" },
    // { id: 20, name: "Capacity Planning Discussion" },
  ];

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 3 }} sx={{ display: "flex" }}>
          <Card sx={{ width: "100%" }}>
            <Typography fontWeight="bold" mb={1}>
              RECENT CONVERSATIONS
            </Typography>
            <Box mb={3}>
              {recentConvo.map((document) => (
                <Card
                  key={document.id}
                  sx={{
                    p: 1.5,
                    background: "#fff",
                    borderRadius: "6px",
                    borderLeft: "6px solid #ddd",
                    mb: 0.6,
                  }}
                >
                  <Stack flexDirection="row" alignItems="center">
                    <Stack sx={{ pr: 1 }}>
                      <DocumentIcon />
                    </Stack>
                    <Stack>
                      <Typography variant="body2">{document.name}</Typography>
                    </Stack>
                  </Stack>
                </Card>
              ))}
            </Box>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
          <Card
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Chat messages area - this will take up available space */}
            <Box
              sx={{
                flexGrow: 1,
                p: 2, // Add some padding for the messages area
                overflowY: "auto", // Allow scrolling if messages overflow
              }}
            >
              {/* This is where your chat messages would go */}
              <Typography variant="body2" color="text.secondary">
                Chat messages will appear here...
              </Typography>
            </Box>

            {/* Input area - this stays at the bottom */}
            <Box
              sx={
                {
                  // p: 2, // Padding around the input
                }
              }
            >
              <Box sx={{ display: "flex" }}>
                <TextField
                  fullWidth
                  placeholder="Type a message"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      paddingLeft: 0.8,
                      paddingRight: 0.8,
                    },
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <AddDocIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmojiIcon />
                          <SendMsgIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                {/* <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: theme.palette.primary.main,
                    height: "42px",
                    width: "46px",
                    borderRadius: "8px",
                    ml: 1,
                    cursor: "pointer",
                  }}
                >
                  <MicIcon />
                </Box> */}
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <Box>
              <Typography fontWeight="bold" mb={1}>
                QUICK ACTIONS
              </Typography>
              {quickActions.map((document) => (
                <Card
                  key={document.id}
                  sx={{
                    p: 1.5,
                    background: "#fff",
                    borderRadius: "6px",
                    borderLeft: "6px solid #ddd",
                    mb: 0.6,
                  }}
                >
                  <Stack flexDirection="row" alignItems="center">
                    <Stack sx={{ pr: 1 }}>{document.icon}</Stack>
                    <Stack>
                      <Typography variant="body2">{document.name}</Typography>
                    </Stack>
                  </Stack>
                </Card>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AiAssistantPage;
