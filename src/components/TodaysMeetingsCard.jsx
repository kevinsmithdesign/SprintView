import React from "react";
import {
  Card,
  Typography,
  Stack,
  Box,
  useTheme,
  Avatar,
  LinearProgress,
  Button,
} from "@mui/material";

const TodaysMeetingsCard = () => {
  const theme = useTheme();

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
    <Card>
      <Stack flexDirection="row" alignItems="center" mb={2}>
        <Stack flexGrow={1}>
          <Typography fontWeight="bold">TODAY'S MEETINGS</Typography>
        </Stack>
        <Box
          sx={{
            height: "40px",
            width: "40px",
            background: "#fff",
            borderRadius: "50%",
          }}
        ></Box>
      </Stack>

      {meetings.map((meeting) => (
        <Card
          key={meeting.id}
          sx={{
            background: "#fff",
            p: 2,
            borderRadius: "12px",
            mb: 0.5,
            cursor: "pointer",
          }}
        >
          <Stack flexDirection="row" gap={2}>
            <Stack>
              <Box
                sx={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "6px",
                  background: meeting.iconColor,
                }}
              />
            </Stack>
            <Stack>
              <Typography variant="body2" fontWeight="bold">
                {meeting.title}
              </Typography>
              <Typography variant="body2" color={theme.palette.primary.main}>
                {meeting.link}
              </Typography>
            </Stack>
          </Stack>
        </Card>
      ))}
    </Card>
  );
};

export default TodaysMeetingsCard;
