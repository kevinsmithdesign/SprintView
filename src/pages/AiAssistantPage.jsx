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
          <Box sx={{ background: "", height: "100vh" }}>
            <Box sx={{ p: 3 }}>Chat interface here</Box>
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
