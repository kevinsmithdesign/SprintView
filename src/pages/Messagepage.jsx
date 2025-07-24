import React, { useState } from "react";
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
  Paper,
  Divider,
} from "@mui/material";
import DocumentIcon from "../assets/icons/DocumentIcon";
import AddDocIcon from "../assets/icons/AddDoc";
import SearchIcon from "../assets/icons/SearchIcon";
import SendMsgIcon from "../assets/icons/SendMsgIcon";
import EmojiIcon from "../assets/icons/EmojiIcon";
import MicIcon from "../assets/icons/MicIcon";
import MessageLeftNav from "../components/MessageLeftNav";

import User1 from "../assets/images/Users/User1.jpg";
import User2 from "../assets/images/Users/User2.jpg";
import User3 from "../assets/images/Users/User3.jpg";
import User4 from "../assets/images/Users/User4.jpg";
import User5 from "../assets/images/Users/User5.jpg";
import User6 from "../assets/images/Users/User6.jpg";
import User7 from "../assets/images/Users/User7.jpg";
import User8 from "../assets/images/Users/User8.jpg";
import User9 from "../assets/images/Users/User9.jpg";

const MessagePage = () => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [messageInput, setMessageInput] = useState("");

  const notifications = [
    {
      id: 1,
      label: "General",
      color: "#FCD98E",
      count: 2,
      messages: [
        {
          id: 1,
          sender: "Sarah Davidson",
          message: "Hey everyone! How's the project going?",
          time: "10:30 AM",
          avatar: User3,
        },
        {
          id: 2,
          sender: "You",
          message: "It's going well! Just finished the wireframes.",
          time: "10:32 AM",
          isMe: true,
        },
        {
          id: 3,
          sender: "Liam Johnson",
          message: "Great work! Can you share them in the documents section?",
          time: "10:35 AM",
          avatar: User4,
        },
      ],
    },
    {
      id: 2,
      label: "Work",
      color: "#B6BAEA",
      messages: [
        {
          id: 1,
          sender: "Emma Watson",
          message: "The client meeting is scheduled for 3 PM today.",
          time: "9:15 AM",
          avatar: User2,
        },
        {
          id: 2,
          sender: "Noah Williams",
          message: "I'll prepare the presentation slides.",
          time: "9:20 AM",
          avatar: User5,
        },
      ],
    },
    {
      id: 3,
      label: "Personal",
      color: "#FED2D7",
      messages: [
        {
          id: 1,
          sender: "Elizabeth Batson",
          message: "Don't forget about lunch tomorrow!",
          time: "Yesterday",
          avatar: User9,
        },
      ],
    },
  ];

  const directMsg = [
    {
      id: 1,
      label: "Sophia Wilson",
      color: "purple",
      avatar: User1,
      count: 2,
      messages: [
        {
          id: 1,
          sender: "Sophia Wilson",
          message: "Hi! Are you available for a quick call?",
          time: "11:45 AM",
          avatar: User1,
        },
        {
          id: 2,
          sender: "Sophia Wilson",
          message: "I wanted to discuss the new design concepts.",
          time: "11:46 AM",
          avatar: User1,
        },
        {
          id: 3,
          sender: "You",
          message: "Sure! I can call in 5 minutes.",
          time: "11:50 AM",
          isMe: true,
        },
      ],
    },
    {
      id: 2,
      label: "Emma Watson",
      color: "blue",
      avatar: User2,
      messages: [
        {
          id: 1,
          sender: "Emma Watson",
          message: "The quarterly report is ready for review.",
          time: "2:30 PM",
          avatar: User2,
        },
        {
          id: 2,
          sender: "You",
          message: "Thanks! I'll check it out.",
          time: "2:32 PM",
          isMe: true,
        },
      ],
    },
    {
      id: 3,
      label: "Sarah Davidson",
      color: "green",
      avatar: User3,
      messages: [
        {
          id: 1,
          sender: "Sarah Davidson",
          message: "Great job on the presentation today!",
          time: "4:15 PM",
          avatar: User3,
        },
      ],
    },
    {
      id: 4,
      label: "Liam Johnson",
      color: "purple",
      avatar: User4,
      count: 2,
      messages: [
        {
          id: 1,
          sender: "Liam Johnson",
          message: "Can you review the code changes?",
          time: "1:20 PM",
          avatar: User4,
        },
        {
          id: 2,
          sender: "Liam Johnson",
          message: "It's in the main branch.",
          time: "1:21 PM",
          avatar: User4,
        },
      ],
    },
    {
      id: 5,
      label: "Noah Williams",
      color: "blue",
      avatar: User5,
      messages: [
        {
          id: 1,
          sender: "Noah Williams",
          message: "Meeting notes uploaded to documents.",
          time: "3:45 PM",
          avatar: User5,
        },
      ],
    },
    {
      id: 6,
      label: "Ethan Parker",
      color: "green",
      avatar: User6,
      messages: [
        {
          id: 1,
          sender: "Ethan Parker",
          message: "Let's sync up tomorrow morning.",
          time: "Yesterday",
          avatar: User6,
        },
      ],
    },
    {
      id: 7,
      label: "Eric Washington",
      color: "purple",
      count: 2,
      avatar: User7,
      messages: [
        {
          id: 1,
          sender: "Eric Washington",
          message: "The new API endpoints are ready for testing.",
          time: "10:15 AM",
          avatar: User7,
        },
        {
          id: 2,
          sender: "Eric Washington",
          message: "Documentation is in the docs folder.",
          time: "10:16 AM",
          avatar: User7,
        },
      ],
    },
    {
      id: 8,
      label: "Arjun Patel",
      color: "blue",
      avatar: User8,
      messages: [
        {
          id: 1,
          sender: "Arjun Patel",
          message: "Database backup completed successfully.",
          time: "8:30 AM",
          avatar: User8,
        },
      ],
    },
    {
      id: 9,
      label: "Elizabeth Batson",
      color: "green",
      avatar: User9,
      messages: [
        {
          id: 1,
          sender: "Elizabeth Batson",
          message: "Thanks for helping with the project!",
          time: "Yesterday",
          avatar: User9,
        },
      ],
    },
  ];

  const documents = [
    {
      id: 1,
      name: "API Documentation.md",
      borderColor: "#B6BAEA",
      content: `# API Documentation

## Overview
This document provides comprehensive information about our REST API endpoints.

## Authentication
All API requests require authentication using Bearer tokens.

\`\`\`
Authorization: Bearer your-token-here
\`\`\`

## Endpoints

### GET /api/users
Returns a list of all users in the system.

**Response:**
\`\`\`json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
\`\`\`

### POST /api/users
Creates a new user.

**Request Body:**
\`\`\`json
{
  "name": "Jane Smith",
  "email": "jane@example.com"
}
\`\`\`

## Rate Limiting
API requests are limited to 1000 requests per hour per API key.`,
    },
    {
      id: 2,
      name: "User Guide.pdf",
      borderColor: "#B6BAEA",
      content: `# User Guide

## Getting Started
Welcome to our application! This guide will help you get up and running quickly.

## Installation
1. Download the application from our website
2. Run the installer
3. Follow the setup wizard

## Basic Features

### Dashboard
The dashboard provides an overview of your account and recent activity.

### Navigation
Use the sidebar to navigate between different sections:
- Home
- Projects
- Messages
- Settings

### Creating a Project
1. Click the "New Project" button
2. Enter project details
3. Select team members
4. Click "Create"

## Advanced Features

### Integrations
Connect with popular tools like Slack, GitHub, and Jira.

### Custom Workflows
Create automated workflows to streamline your processes.

## Support
For additional help, contact our support team at support@example.com`,
    },
    {
      id: 3,
      name: "Database Schema.sql",
      borderColor: "#B6BAEA",
      content: `-- Database Schema for SprintView Application

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    avatar_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    owner_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Messages table
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    sender_id INTEGER REFERENCES users(id),
    channel_id INTEGER REFERENCES channels(id),
    content TEXT NOT NULL,
    message_type VARCHAR(20) DEFAULT 'text',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Channels table
CREATE TABLE channels (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    project_id INTEGER REFERENCES projects(id),
    is_private BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_messages_channel_id ON messages(channel_id);
CREATE INDEX idx_messages_created_at ON messages(created_at);
CREATE INDEX idx_users_email ON users(email);`,
    },
  ];

  const photo = [
    {
      id: 1,
      name: "Team Photo.jpg",
      borderColor: "#FCD98E",
      content:
        "This is a team photo from our last company retreat. Everyone looks great!",
      type: "image",
    },
    {
      id: 2,
      name: "Office Layout.png",
      borderColor: "#FCD98E",
      content:
        "Floor plan showing the new office layout with meeting rooms and workspaces.",
      type: "image",
    },
    {
      id: 3,
      name: "Product Mockup.jpg",
      borderColor: "#FCD98E",
      content: "Initial mockup designs for the new product features.",
      type: "image",
    },
  ];

  const video = [
    {
      id: 1,
      name: "Demo Video.mp4",
      borderColor: "#FED2D7",
      content:
        "Product demonstration video showing the key features and user flow.",
      type: "video",
    },
    {
      id: 2,
      name: "Meeting Recording.mp4",
      borderColor: "#FED2D7",
      content: "Recording of yesterday's sprint planning meeting.",
      type: "video",
    },
    {
      id: 3,
      name: "Tutorial.mp4",
      borderColor: "#FED2D7",
      content:
        "Step-by-step tutorial on how to use the new dashboard features.",
      type: "video",
    },
  ];

  // Set default selection to General channel
  React.useEffect(() => {
    if (!selectedItem) {
      setSelectedItem(notifications[0]);
      setSelectedType("channel");
    }
  }, []);

  const handleItemClick = (item, type) => {
    setSelectedItem(item);
    setSelectedType(type);
  };

  const handleSendMessage = () => {
    if (
      messageInput.trim() &&
      selectedType &&
      (selectedType === "channel" || selectedType === "direct")
    ) {
      // Add new message to the selected chat
      const newMessage = {
        id: Date.now(),
        sender: "You",
        message: messageInput.trim(),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMe: true,
      };

      // In a real app, you'd update the state/database here
      selectedItem.messages.push(newMessage);
      setMessageInput("");
    }
  };

  const renderMiddleContent = () => {
    if (!selectedItem) {
      return (
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6" color="text.secondary">
            Welcome to SprintView Messages
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Select a channel, direct message, or document to get started
          </Typography>
        </Box>
      );
    }

    if (
      selectedType === "document" ||
      selectedType === "image" ||
      selectedType === "video"
    ) {
      return (
        <Box sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              sx={{ mb: 1, display: "flex", alignItems: "center", gap: 1 }}
            >
              <DocumentIcon />
              {selectedItem.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} •
              Last modified: Today
            </Typography>
          </Box>

          <Paper sx={{ p: 4, bgcolor: "#fff", boxShadow: "none" }}>
            {selectedType === "document" ? (
              <Typography
                component="pre"
                sx={{
                  whiteSpace: "pre-wrap",
                  fontFamily: "Monaco, Consolas, monospace",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                {selectedItem.content}
              </Typography>
            ) : (
              <Box sx={{ textAlign: "center", py: 4 }}>
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: 2,
                    bgcolor: selectedItem.borderColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <Typography variant="h4">
                    {selectedType === "image" ? "🖼️" : "🎥"}
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {selectedItem.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedItem.content}
                </Typography>
              </Box>
            )}
          </Paper>
        </Box>
      );
    }

    // Chat view for channels and direct messages
    return (
      <>
        {/* Chat header */}
        <Box sx={{ p: 2, borderBottom: "1px solid #f0f0f0" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {selectedType === "direct" ? (
              <Avatar
                src={selectedItem.avatar}
                sx={{ width: 40, height: 40 }}
              />
            ) : (
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: selectedItem.color,
                }}
              />
            )}
            <Box>
              <Typography variant="h6">{selectedItem.label}</Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedType === "direct" ? "Direct Message" : "Channel"}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Messages area */}
        <Box sx={{ flexGrow: 1, p: 2, overflowY: "auto" }}>
          {selectedItem.messages?.map((msg) => (
            <Box key={msg.id} sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                {!msg.isMe && (
                  <Avatar src={msg.avatar} sx={{ width: 40, height: 40 }} />
                )}
                <Box
                  sx={{
                    flex: 1,
                    ml: msg.isMe ? "auto" : 0,
                    mr: msg.isMe ? 0 : "auto",
                    maxWidth: "70%",
                  }}
                >
                  {!msg.isMe && (
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                      {msg.sender}
                    </Typography>
                  )}
                  <Paper
                    sx={{
                      p: 2,
                      bgcolor: msg.isMe ? "#B6BAEA" : "#fff",
                      borderRadius: "16px",
                      boxShadow: "none",
                    }}
                  >
                    <Typography variant="body1">{msg.message}</Typography>
                  </Paper>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mt: 0.5, display: "block" }}
                  >
                    {msg.time}
                  </Typography>
                </Box>
                {msg.isMe && (
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: "#B6BAEA",
                      color: "#000",
                    }}
                  >
                    Y
                  </Avatar>
                )}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Input area */}
        <Box sx={{ p: 2, borderTop: "1px solid #f0f0f0" }}>
          <Box sx={{ display: "flex" }}>
            <TextField
              fullWidth
              placeholder={`Message ${selectedItem.label}`}
              variant="outlined"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              sx={{
                "& .MuiOutlinedInput-root": {
                  py: 1,
                  background: "#fff",
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
                      <IconButton
                        onClick={handleSendMessage}
                        disabled={!messageInput.trim()}
                      >
                        <SendMsgIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
        </Box>
      </>
    );
  };

  return (
    <Container sx={{ pb: 6 }}>
      <Grid container spacing={2} sx={{ minHeight: "calc(100vh - 200px)" }}>
        <Grid size={{ xs: 12, md: 3 }} sx={{ display: "flex" }}>
          <Card
            sx={{
              width: "100%",
              overflowY: "auto",
              height: "calc(100vh - 200px)",
            }}
          >
            <Typography fontWeight="bold" mb={2}>
              CHANNELS
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 0.2, mb: 4 }}
            >
              {notifications.map((notification) => (
                <Box
                  key={notification.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    p: 1,
                    borderRadius: "8px",
                    bgcolor:
                      selectedItem?.id === notification.id &&
                      selectedType === "channel"
                        ? "rgba(25, 118, 210, 0.08)"
                        : "transparent",
                    "&:hover": {
                      bgcolor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                  onClick={() => handleItemClick(notification, "channel")}
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: notification.color,
                      mr: 1.5,
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography>{notification.label}</Typography>
                  </Box>
                  {notification.count && (
                    <Box
                      sx={{
                        background: "#F7946F",
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

            <Typography fontWeight="bold" mb={2}>
              DIRECT MESSAGES
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.2 }}>
              {directMsg.map((msg) => (
                <Box
                  key={`${msg.id}-${msg.label}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    p: 1,
                    borderRadius: "8px",
                    bgcolor:
                      selectedItem?.label === msg.label &&
                      selectedType === "direct"
                        ? "rgba(25, 118, 210, 0.08)"
                        : "transparent",
                    "&:hover": {
                      bgcolor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                  onClick={() => handleItemClick(msg, "direct")}
                >
                  <Box sx={{ mr: 1.5 }}>
                    <Avatar
                      src={msg.avatar}
                      style={{ height: "40px", width: "40px" }}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography>{msg.label}</Typography>
                  </Box>
                  {msg.count && (
                    <Box
                      sx={{
                        background: "#F7946F",
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
                      {msg.count}
                    </Box>
                  )}
                </Box>
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
              height: "calc(100vh - 200px)",
            }}
          >
            {renderMiddleContent()}
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }} sx={{ display: "flex" }}>
          <Card
            sx={{
              width: "100%",
              overflowY: "auto",
              height: "calc(100vh - 200px)",
            }}
          >
            <Typography fontWeight="bold" mb={1.5}>
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
                    borderLeft: `6px solid`,
                    borderColor: document.borderColor,
                    mb: 0.6,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    bgcolor:
                      selectedItem?.id === document.id &&
                      selectedType === "document"
                        ? "rgba(25, 118, 210, 0.08)"
                        : "#fff",
                    "&:hover": {
                      // transform: "translateY(-1px)",
                      // boxShadow: 1,
                    },
                  }}
                  onClick={() => handleItemClick(document, "document")}
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
              <Typography fontWeight="bold" mb={1.5}>
                IMAGES
              </Typography>
              {photo.map((document) => (
                <Card
                  key={document.id}
                  sx={{
                    p: 1.5,
                    background: "#fff",
                    borderRadius: "6px",
                    borderLeft: "6px solid",
                    borderColor: document.borderColor,
                    mb: 0.6,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    bgcolor:
                      selectedItem?.id === document.id &&
                      selectedType === "image"
                        ? "rgba(25, 118, 210, 0.08)"
                        : "#fff",
                    // "&:hover": {
                    //   transform: "translateY(-1px)",
                    //   boxShadow: 1,
                    // },
                  }}
                  onClick={() => handleItemClick(document, "image")}
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
              <Typography fontWeight="bold" mb={1.5}>
                VIDEO
              </Typography>
              {video.map((document) => (
                <Card
                  key={document.id}
                  sx={{
                    p: 1.5,
                    background: "#fff",
                    borderRadius: "6px",
                    borderLeft: "6px solid",
                    borderColor: document.borderColor,
                    mb: 0.6,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    bgcolor:
                      selectedItem?.id === document.id &&
                      selectedType === "video"
                        ? "rgba(25, 118, 210, 0.08)"
                        : "#fff",
                    // "&:hover": {
                    //   transform: "translateY(-1px)",
                    //   boxShadow: 1,
                    // },
                  }}
                  onClick={() => handleItemClick(document, "video")}
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
