// import React, { useState } from "react";
// import dayjs from "dayjs";
// import {
//   Grid,
//   Container,
//   Box,
//   Card,
//   Chip,
//   Typography,
//   Avatar,
// } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// import TeamViewCard from "../components/TeamViewCard";
// import TodaysMeetingsCard from "../components/TodaysMeetingsCard";
// import CalendarSm from "../components/CalendarSm";

// const BoardPage = () => {
//   return (
//     <>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <Container>
//           <Grid container spacing={2} mb={4}>
//             <Grid size={{ xs: 12, md: 4 }}>
//               <TeamViewCard />
//             </Grid>
//             <Grid size={{ xs: 12, md: 4 }}>
//               <TodaysMeetingsCard />
//             </Grid>
//             <Grid size={{ xs: 12, md: 4 }}>
//               {/* <DatePicker defaultValue={dayjs("2022-04-17")} /> */}
//               <CalendarSm />
//             </Grid>
//           </Grid>
//         </Container>
//         <Box
//           sx={{
//             background: "#F5F9FC",
//             py: 4,
//             minHeight: "100vh",
//           }}
//         >
//           <Container>
//             <Grid container spacing={4}>
//               <Grid size={{ xs: 12, md: 3 }}>
//                 <Typography fontWeight="bold" mb={0.5}>
//                   TODO
//                 </Typography>
//                 <Card sx={{ background: "#fff" }}>
//                   <Chip label="UI Design" sx={{ mb: 1 }} />
//                   <Typography fontWeight="bold" mb={1}>
//                     High Fidelity Checkout Mockups
//                   </Typography>
//                   <Avatar sx={{ mb: 2 }} />
//                   <Typography>2 Comments</Typography>
//                 </Card>
//               </Grid>
//               <Grid size={{ xs: 12, md: 3 }}>
//                 <Typography fontWeight="bold" mb={0.5}>
//                   IN PROGRESS
//                 </Typography>
//                 <Card sx={{ background: "#fff" }}>
//                   <Chip label="UI Design" sx={{ mb: 1 }} />
//                   <Typography fontWeight="bold" mb={1}>
//                     High Fidelity Checkout Mockups
//                   </Typography>
//                   <Avatar sx={{ mb: 2 }} />
//                   <Typography>2 Comments</Typography>
//                 </Card>
//               </Grid>
//               <Grid size={{ xs: 12, md: 3 }}>
//                 <Typography fontWeight="bold" mb={0.5}>
//                   REVIEW
//                 </Typography>
//                 <Card sx={{ background: "#fff" }}>
//                   <Chip label="UI Design" sx={{ mb: 1 }} />
//                   <Typography fontWeight="bold" mb={1}>
//                     High Fidelity Checkout Mockups
//                   </Typography>
//                   <Avatar sx={{ mb: 2 }} />
//                   <Typography>2 Comments</Typography>
//                 </Card>
//               </Grid>
//               <Grid size={{ xs: 12, md: 3 }}>
//                 <Typography fontWeight="bold" mb={0.5}>
//                   DONE
//                 </Typography>
//                 <Card sx={{ background: "#fff" }}>
//                   <Chip label="UI Design" sx={{ mb: 1 }} />
//                   <Typography fontWeight="bold" mb={1}>
//                     High Fidelity Checkout Mockups
//                   </Typography>
//                   <Avatar sx={{ mb: 2 }} />
//                   <Typography>2 Comments</Typography>
//                 </Card>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>
//       </LocalizationProvider>
//     </>
//   );
// };

// export default BoardPage;

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

const BoardPage = () => {
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
              {/* <DatePicker defaultValue={dayjs("2022-04-17")} /> */}
              <CalendarSm />
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            background: "#F5F9FC",
            py: 4,
            flex: 1, // This makes the background section grow to fill remaining space
          }}
        >
          <Container>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography fontWeight="bold" mb={0.5}>
                  TODO
                </Typography>
                <Card sx={{ background: "#fff" }}>
                  <Chip label="UI Design" sx={{ mb: 1 }} />
                  <Typography fontWeight="bold" mb={1}>
                    High Fidelity Checkout Mockups
                  </Typography>
                  <Avatar sx={{ mb: 2 }} />
                  <Typography>2 Comments</Typography>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography fontWeight="bold" mb={0.5}>
                  IN PROGRESS
                </Typography>
                <Card sx={{ background: "#fff" }}>
                  <Chip label="UI Design" sx={{ mb: 1 }} />
                  <Typography fontWeight="bold" mb={1}>
                    High Fidelity Checkout Mockups
                  </Typography>
                  <Avatar sx={{ mb: 2 }} />
                  <Typography>2 Comments</Typography>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography fontWeight="bold" mb={0.5}>
                  REVIEW
                </Typography>
                <Card sx={{ background: "#fff" }}>
                  <Chip label="UI Design" sx={{ mb: 1 }} />
                  <Typography fontWeight="bold" mb={1}>
                    High Fidelity Checkout Mockups
                  </Typography>
                  <Avatar sx={{ mb: 2 }} />
                  <Typography>2 Comments</Typography>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography fontWeight="bold" mb={0.5}>
                  DONE
                </Typography>
                <Card sx={{ background: "#fff" }}>
                  <Chip label="UI Design" sx={{ mb: 1 }} />
                  <Typography fontWeight="bold" mb={1}>
                    High Fidelity Checkout Mockups
                  </Typography>
                  <Avatar sx={{ mb: 2 }} />
                  <Typography>2 Comments</Typography>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </LocalizationProvider>
    </Box>
  );
};

export default BoardPage;
