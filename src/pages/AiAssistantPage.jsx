// import React from "react";
// import {
//   Grid,
//   Container,
//   Box,
//   Card,
//   Chip,
//   Typography,
//   Stack,
//   Avatar,
//   TextField,
//   InputAdornment,
//   IconButton,
//   useTheme,
// } from "@mui/material";
// import DocumentIcon from "../assets/icons/DocumentIcon";
// import AddDocIcon from "../assets/icons/AddDoc";
// import SearchIcon from "../assets/icons/SearchIcon";
// import SendMsgIcon from "../assets/icons/SendMsgIcon";
// import EmojiIcon from "../assets/icons/EmojiIcon";
// import MicIcon from "../assets/icons/MicIcon";
// import MessageLeftNav from "../components/MessageLeftNav";
// import SprintProgressIcon from "../assets/icons/SprintProgressIcon";
// import WarningIcon from "../assets/icons/WarningIcon";
// import ChartIcon from "../assets/icons/ChartIcon";
// import TeamWorkloadIcon from "../assets/icons/TeamWorkloadIcon";

// const AiAssistantPage = () => {
//   const theme = useTheme();

//   const quickActions = [
//     { id: 1, name: "Sprint Progress", icon: <SprintProgressIcon /> },
//     { id: 2, name: "Standup Summary", icon: <DocumentIcon /> },
//     { id: 3, name: "Current Blockers", icon: <WarningIcon /> },
//     { id: 4, name: "Velocity Analysis", icon: <ChartIcon /> },
//     { id: 5, name: "Team Workload", icon: <TeamWorkloadIcon /> },
//   ];

//   const recentConvo = [
//     { id: 1, name: "Sprint Progress Analysis" },
//     { id: 2, name: "Team Velocity Insights" },
//     { id: 4, name: "Retrospective Action Items" },
//     { id: 5, name: "API Documentation Review" },
//     { id: 6, name: "User Story Refinement" },
//     // { id: 7, name: "Bug Triage Meeting Notes" },
//     // { id: 8, name: "Sprint Planning Estimates" },
//     // { id: 11, name: "Testing Strategy Discussion" },
//     // { id: 12, name: "Performance Optimization" },
//     // { id: 13, name: "Client Feedback Analysis" },
//     // { id: 14, name: "Feature Flag Configuration" },
//     // { id: 15, name: "Daily Standup Summary" },
//     // { id: 16, name: "Sprint Goals Alignment" },
//     // { id: 17, name: "Technical Debt Review" },
//     // { id: 18, name: "QA Test Case Updates" },
//     // { id: 19, name: "Sprint Demo Preparation" },
//     // { id: 20, name: "Capacity Planning Discussion" },
//   ];

//   return (
//     <>
//       <Grid container>
//         <Grid size={{ xs: 12, md: 3 }} sx={{ display: "flex" }}>
//           <Box>
//             <Typography fontWeight="bold" mb={1}>
//               RECENT CONVERSATIONS
//             </Typography>
//             <Box mb={3}>
//               {recentConvo.map((document) => (
//                 <Card
//                   key={document.id}
//                   sx={{
//                     p: 1.5,
//                     background: "#fff",
//                     borderRadius: "6px",
//                     borderLeft: "6px solid #ddd",
//                     mb: 0.6,
//                   }}
//                 >
//                   <Stack flexDirection="row" alignItems="center">
//                     <Stack sx={{ pr: 1 }}>
//                       <DocumentIcon />
//                     </Stack>
//                     <Stack>
//                       <Typography variant="body2">{document.name}</Typography>
//                     </Stack>
//                   </Stack>
//                 </Card>
//               ))}
//             </Box>
//           </Box>
//         </Grid>

//         <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
//           <Box
//             sx={{
//               width: "100%",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             {/* Chat messages area - this will take up available space */}
//             <Box
//               sx={{
//                 flexGrow: 1,
//                 p: 2, // Add some padding for the messages area
//                 overflowY: "auto", // Allow scrolling if messages overflow
//               }}
//             >
//               {/* This is where your chat messages would go */}
//               <Typography variant="body2" color="text.secondary">
//                 Test
//               </Typography>
//             </Box>

//             {/* Input area - this stays at the bottom */}
//             <Box
//               sx={
//                 {
//                   // p: 2, // Padding around the input
//                 }
//               }
//             >
//               <Box sx={{ display: "flex" }}>
//                 <TextField
//                   fullWidth
//                   placeholder="Type a message"
//                   variant="outlined"
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       paddingLeft: 0.8,
//                       paddingRight: 0.8,
//                     },
//                   }}
//                   slotProps={{
//                     input: {
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <AddDocIcon />
//                         </InputAdornment>
//                       ),
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <EmojiIcon />
//                           <SendMsgIcon />
//                         </InputAdornment>
//                       ),
//                     },
//                   }}
//                 />
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid size={{ xs: 12, md: 3 }}>
//           <>
//             <Box mb={6}>
//               <Typography fontWeight="bold" mb={1}>
//                 QUICK ACTIONS
//               </Typography>
//               {quickActions.map((document) => (
//                 <Card
//                   key={document.id}
//                   sx={{
//                     p: 1.5,
//                     background: "#fff",
//                     borderRadius: "6px",
//                     borderLeft: "6px solid #ddd",
//                     mb: 0.6,
//                   }}
//                 >
//                   <Stack flexDirection="row" alignItems="center">
//                     <Stack sx={{ pr: 1 }}>{document.icon}</Stack>
//                     <Stack>
//                       <Typography variant="body2">{document.name}</Typography>
//                     </Stack>
//                   </Stack>
//                 </Card>
//               ))}
//             </Box>
//             <Box>
//               <Typography fontWeight="bold" mb={1}>
//                 QUICK ACTIONS
//               </Typography>
//               {quickActions.map((document) => (
//                 <Card
//                   key={document.id}
//                   sx={{
//                     p: 1.5,
//                     background: "#fff",
//                     borderRadius: "6px",
//                     borderLeft: "6px solid #ddd",
//                     mb: 0.6,
//                   }}
//                 >
//                   <Stack flexDirection="row" alignItems="center">
//                     <Stack sx={{ pr: 1 }}>{document.icon}</Stack>
//                     <Stack>
//                       <Typography variant="body2">{document.name}</Typography>
//                     </Stack>
//                   </Stack>
//                 </Card>
//               ))}
//             </Box>
//           </>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default AiAssistantPage;

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
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import AddDoc from "../assets/icons/AddDoc";
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
import AiAssistantIcon from "../assets/icons/AiAssistant";

const AiAssistantPage = () => {
  const theme = useTheme();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputValue,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newMessage]);
      setInputValue("");

      // Simulate AI response after a short delay
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          text: "Thanks for your message! This is a simulated AI response.",
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

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
  ];

  return (
    <>
      <Grid container>
        <Grid size={{ xs: 12, md: 2 }}>
          <Box
            sx={{
              height: "100vh",
              borderRight: "1px solid #343434",
            }}
          >
            <Box sx={{ p: 3 }}>
              <Typography fontWeight="bold" mb={1.5}>
                RECENT CONVERSATIONS
              </Typography>
              <Typography variant="body2" mb={1}>
                Sprint convo list item one plus some
              </Typography>
              <Typography variant="body2" mb={1}>
                Sprint convo list item one plus some
              </Typography>
              <Typography variant="body2" mb={1}>
                Sprint convo list item one plus some
              </Typography>
              <Typography variant="body2" mb={1}>
                Sprint convo list item one plus some
              </Typography>
              <Typography variant="body2" mb={1}>
                Sprint convo list item one plus some
              </Typography>
            </Box>
            <Box sx={{ p: 3 }}>
              <Typography fontWeight="bold" mb={1.5}>
                COLLECTIONS
              </Typography>
              <Typography variant="body2" mb={1}>
                Collection 1
              </Typography>
              <Typography variant="body2" mb={1}>
                Collection 2
              </Typography>
              <Typography variant="body2" mb={1}>
                Collection 3
              </Typography>
              <Typography variant="body2" mb={1}>
                Collection 4
              </Typography>
              <Typography variant="body2" mb={1}>
                Collection 5
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              background: "",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Chat messages area */}
            <Box
              sx={{
                flexGrow: 1,
                p: 3,
                overflowY: "auto",
                backgroundColor: "",
              }}
            >
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      justifyContent:
                        message.sender === "user" ? "flex-end" : "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: "70%",
                        p: 2,
                        borderRadius: 2,
                        backgroundColor:
                          message.sender === "user"
                            ? theme.palette.primary.main
                            : "#2a2a2a",
                        color: "#fff",
                        border:
                          message.sender === "ai"
                            ? "1px solid #343434"
                            : "none",
                      }}
                    >
                      <Typography variant="body2">{message.text}</Typography>
                    </Box>
                  </motion.div>
                ))}
              </AnimatePresence>

              {messages.length === 0 && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    color: "#888",
                    px: 3,
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        background: theme.palette.primary.main,
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        mx: "auto",
                        mb: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AiAssistantIcon />
                    </Box>
                    <Typography fontWeight="bold" variant="h5" mb={2}>
                      How can I assist you today?
                    </Typography>

                    <Box sx={{ maxWidth: "420px", mx: "auto" }}>
                      <Typography variant="body2" mb={3} color="#8B8E96">
                        I have access to all your SprintView data including
                        sprint progress, team conversations, meeting notes, and
                        board updates. Ask me anything about your Sprint.
                      </Typography>
                    </Box>
                  </Box>
                  <Grid container spacing={2} sx={{ display: "flex", alignItems: "stretch" }}>
                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
                      <Card
                        sx={{
                          p: 4,
                          boxShadow: "none",
                          borderRadius: "16px",
                          background: "#111",
                          color: "#fff",
                          width: "100%",
                        }}
                      >
                        <Typography fontWeight="bold" mb={1}>
                          Examples
                        </Typography>
                        <Card
                          sx={{
                            p: 2,
                            boxShadow: "none",
                            borderRadius: "8px",
                            background: "#1b1b1b",
                            color: "#fff",
                            mb: 0.5,
                          }}
                        >
                          <Typography variant="body2">
                            Show me all blockers mentioned in today's standup meeting
                          </Typography>
                        </Card>
                        <Card
                          sx={{
                            p: 2,
                            boxShadow: "none",
                            borderRadius: "8px",
                            background: "#1b1b1b",
                            color: "#fff",
                            mb: 0.5,
                          }}
                        >
                          <Typography variant="body2">
                            Which team members are overloaded this current sprint?
                          </Typography>
                        </Card>
                        <Card
                          sx={{
                            p: 2,
                            boxShadow: "none",
                            borderRadius: "8px",
                            background: "#1b1b1b",
                            color: "#fff",
                            mb: 0.5,
                          }}
                        >
                          <Typography variant="body2">
                            Create a summary of our recent retrospective meeting decisions
                          </Typography>
                        </Card>
                      </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
                      <Card
                        sx={{
                          p: 4,
                          boxShadow: "none",
                          borderRadius: "16px",
                          background: "#111",
                          color: "#fff",
                          width: "100%",
                        }}
                      >
                        <Typography fontWeight="bold" mb={1}>
                          Capabilities
                        </Typography>
                        <Card
                          sx={{
                            p: 2,
                            boxShadow: "none",
                            borderRadius: "8px",
                            background: "#1b1b1b",
                            color: "#fff",
                            mb: 0.5,
                          }}
                        >
                          <Typography variant="body2">
                            Cross-reference chat discussions with current board status updates
                          </Typography>
                        </Card>
                        <Card
                          sx={{
                            p: 2,
                            boxShadow: "none",
                            borderRadius: "8px",
                            background: "#1b1b1b",
                            color: "#fff",
                            mb: 0.5,
                          }}
                        >
                          <Typography variant="body2">
                            Analyze meeting notes for action items and key decisions
                          </Typography>
                        </Card>
                        <Card
                          sx={{
                            p: 2,
                            boxShadow: "none",
                            borderRadius: "8px",
                            background: "#1b1b1b",
                            color: "#fff",
                            mb: 0.5,
                          }}
                        >
                          <Typography variant="body2">
                            Track story progress and identify important patterns across sprints
                          </Typography>
                        </Card>
                      </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
                      <Card
                        sx={{
                          p: 4,
                          boxShadow: "none",
                          borderRadius: "16px",
                          background: "#111",
                          color: "#fff",
                          width: "100%",
                        }}
                      >
                        <Typography fontWeight="bold" mb={1}>
                          Limitations
                        </Typography>
                        <Card
                          sx={{
                            p: 2,
                            boxShadow: "none",
                            borderRadius: "8px",
                            background: "#1b1b1b",
                            color: "#fff",
                            mb: 0.5,
                          }}
                        >
                          <Typography variant="body2">
                            Cannot predict external dependencies that are outside team control
                          </Typography>
                        </Card>
                        <Card
                          sx={{
                            p: 2,
                            boxShadow: "none",
                            borderRadius: "8px",
                            background: "#1b1b1b",
                            color: "#fff",
                            mb: 0.5,
                          }}
                        >
                          <Typography variant="body2">
                            Cannot replace human judgment for complex project decisions
                          </Typography>
                        </Card>
                        <Card
                          sx={{
                            p: 2,
                            boxShadow: "none",
                            borderRadius: "8px",
                            background: "#1b1b1b",
                            color: "#fff",
                            mb: 0.5,
                          }}
                        >
                          <Typography variant="body2">
                            All recommendations require team validation before implementation
                          </Typography>
                        </Card>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>

            {/* Chat input at bottom */}
            <Box
              sx={{
                p: 2,
                borderTop: "1px solid #343434",
                backgroundColor: "",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-end", gap: 1 }}>
                <IconButton
                  sx={{
                    color: "#fff",
                    backgroundColor: "#111",
                    border: "1px solid #343434",
                    // borderRadius: 2,
                    p: 1.8,
                    "&:hover": {
                      backgroundColor: "#3a3a3a",
                    },
                  }}
                >
                  <AddDoc />
                </IconButton>

                <TextField
                  fullWidth
                  placeholder="Type your message..."
                  variant="outlined"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      // borderRadius: 2,
                      backgroundColor: "#111",
                      color: "#fff",
                      border: "1px solid #343434",
                      "&:hover": {
                        borderColor: "#555",
                      },
                      "&.Mui-focused": {
                        borderColor: theme.palette.primary.main,
                      },
                      "& fieldset": {
                        border: "none",
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "#fff",
                      "&::placeholder": {
                        color: "#888",
                        opacity: 1,
                      },
                    },
                  }}
                />

                <IconButton
                  onClick={handleSendMessage}
                  sx={{
                    color: "#fff",
                    backgroundColor: theme.palette.primary.main,
                    // borderRadius: 2,
                    p: 1.8,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  <SendMsgIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 2 }}>
          <Box
            sx={{
              background: "",
              height: "100vh",
              borderLeft: "1px solid #343434",
            }}
          >
            <Box
              sx={{
                p: 3,
              }}
            >
              <Typography fontWeight="bold" mb={1.5}>
                QUICK ACTIONS
              </Typography>
              <Typography variant="body2" mb={1}>
                Sprint Progress
              </Typography>
              <Typography variant="body2" mb={1}>
                Current Blockers
              </Typography>
              <Typography variant="body2" mb={1}>
                Standup Summary{" "}
              </Typography>
              <Typography variant="body2" mb={1}>
                Team Capacity
              </Typography>
              <Typography variant="body2" mb={1}>
                Velocity Analysis
              </Typography>
            </Box>
            <Box
              sx={{
                p: 3,
              }}
            >
              <Typography fontWeight="bold" mb={1.5}>
                ANALYTICS & REPORTS
              </Typography>
              <Typography variant="body2" mb={1}>
                Sprint Health Score
              </Typography>
              <Typography variant="body2" mb={1}>
                Risk Assessment
              </Typography>
              <Typography variant="body2" mb={1}>
                Trend Comparison
              </Typography>
              <Typography variant="body2" mb={1}>
                Predictive Analytics
              </Typography>
            </Box>
            <Box
              sx={{
                p: 3,
              }}
            >
              <Typography fontWeight="bold" mb={1.5}>
                PROCESS & QUALITY
              </Typography>
              <Typography variant="body2" mb={1}>
                Bug Trend Analysis
              </Typography>
              <Typography variant="body2" mb={1}>
                Code Revew Insight
              </Typography>
              <Typography variant="body2" mb={1}>
                Definition of Done Checker
              </Typography>
              <Typography variant="body2" mb={1}>
                Technical Debt Tracker
              </Typography>
            </Box>
            <Box
              sx={{
                p: 3,
              }}
            >
              <Typography fontWeight="bold" mb={1.5}>
                PLANNING & SETUP
              </Typography>
              <Typography variant="body2" mb={1}>
                Sprint Planning
              </Typography>
              <Typography variant="body2" mb={1}>
                Sprint Retro
              </Typography>
              <Typography variant="body2" mb={1}>
                Dependency Tracker
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AiAssistantPage;
