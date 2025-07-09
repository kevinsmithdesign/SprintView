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

const MessagePage = () => {
  const theme = useTheme();

  const notifications = [
    {
      id: 1,
      label: "General",
      color: "purple",
      count: 2,
    },
    {
      id: 2,
      label: "Work",
      color: "blue",
      //   count: 5,
    },
    {
      id: 3,
      label: "Personal",
      color: "green",
      // No count - will not show notification badge
    },
  ];

  const directMsg = [
    {
      id: 1,
      label: "General",
      color: "purple",
      count: 2,
    },
    {
      id: 2,
      label: "Work",
      color: "blue",
      //   count: 5,
    },
    {
      id: 3,
      label: "Personal",
      color: "green",
      // No count - will not show notification badge
    },
    {
      id: 1,
      label: "General",
      color: "purple",
      count: 2,
    },
    {
      id: 2,
      label: "Work",
      color: "blue",
      //   count: 5,
    },
    {
      id: 3,
      label: "Personal",
      color: "green",
      // No count - will not show notification badge
    },
    {
      id: 1,
      label: "General",
      color: "purple",
      count: 2,
    },
    {
      id: 2,
      label: "Work",
      color: "blue",
      //   count: 5,
    },
    {
      id: 3,
      label: "Personal",
      color: "green",
      // No count - will not show notification badge
    },
  ];

  const documents = [
    { id: 1, name: "API Documentation.md" },
    { id: 2, name: "User Guide.pdf" },
    { id: 3, name: "Database Schema.sql" },
  ];

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 3 }} sx={{ display: "flex" }}>
          <Card sx={{ width: "100%" }}>
            <Typography fontWeight="bold" mb={1}>
              CHANNELS
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1.2, mb: 4 }}
            >
              {notifications.map((notification) => (
                <Box
                  key={notification.id}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: notification.color,
                      mr: 1,
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography>{notification.label}</Typography>
                  </Box>
                  {notification.count && (
                    <Box
                      sx={{
                        background: "#F7946F", // Always orange - consistent badge color
                        height: "18px",
                        width: "18px",
                        borderRadius: "50%",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {notification.count}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            <Typography fontWeight="bold" mb={1}>
              DIRECT MESSAGES
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
              {directMsg.map((notification) => (
                <Box
                  key={notification.id}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: notification.color,
                      mr: 1,
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography>{notification.label}</Typography>
                  </Box>
                  {notification.count && (
                    <Box
                      sx={{
                        background: "#F7946F", // Always orange - consistent badge color
                        height: "18px",
                        width: "18px",
                        borderRadius: "50%",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {notification.count}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
        {/* <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
          <Card sx={{ width: "100%" }}>
            <Box sx={{ display: "flex" }}>
              <TextField
                fullWidth
                placeholder="Type a message"
                variant="outlined"
                //   value={message}
                //   onChange={(e) => setMessage(e.target.value)}
                sx={{
                  // mb: 2,
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

              <Box
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
              </Box>
            </Box>
          </Card>
        </Grid> */}

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

        <Grid size={{ xs: 12, md: 3 }} sx={{ display: "flex" }}>
          <Card sx={{ width: "100%" }}>
            <Typography fontWeight="bold" mb={1}>
              DOCUMENTS
            </Typography>
            <Box mb={3}>
              {documents.map((document) => (
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

            <Box mb={3}>
              <Typography fontWeight="bold" mb={1}>
                DOCUMENTS
              </Typography>
              {documents.map((document) => (
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

            <Box>
              <Typography fontWeight="bold" mb={1}>
                DOCUMENTS
              </Typography>
              {documents.map((document) => (
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
      </Grid>
    </Container>
  );
};

export default MessagePage;
