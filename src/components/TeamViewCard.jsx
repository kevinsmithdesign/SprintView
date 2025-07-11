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
import DropdownIcon from "../assets/icons/DropdownIcon";
import User1 from "../assets/images/Users/User1.jpg";
import User2 from "../assets/images/Users/User2.jpg";
import User3 from "../assets/images/Users/User3.jpg";
import User4 from "../assets/images/Users/User4.jpg";
import User5 from "../assets/images/Users/User5.jpg";
import User6 from "../assets/images/Users/User6.jpg";

const TeamViewCard = () => {
  const theme = useTheme();

  return (
    <Card>
      <Stack flexDirection="row" alignItems="center" mb={1}>
        <Stack flexGrow={1}>
          <Typography fontWeight="bold">TEAM</Typography>
        </Stack>
        <Box
          sx={{
            height: "40px",
            width: "40px",
            background: "#fff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "point",
            "&:hover": {
              background: "#ddd",
              cursor: "pointer",
            },
          }}
        >
          <DropdownIcon />
        </Box>
      </Stack>
      <Typography variant="h4" fontWeight="600">
        Cronus
      </Typography>
      <Typography
        variant="body2"
        fontWeight="600"
        color={theme.palette.secondary.main}
        mb={3}
      >
        Sprint 2 - Oct. 7th - 21st
      </Typography>
      <Stack
        flexDirection="row"
        sx={{
          mb: 2,
          "& .MuiAvatar-root": {
            border: "2px solid #F5F9FC",
            marginLeft: "-8px",
            "&:first-of-type": {
              marginLeft: 0,
            },
          },
        }}
      >
        <Avatar src={User6} />
        <Avatar src={User1} />
        <Avatar src={User3} />
        <Avatar src={User4} />
        <Avatar src={User2} />

        <Avatar src={User5} />
      </Stack>

      <LinearProgress variant="determinate" value="80" sx={{ mb: 1 }} />
      <Typography variant="body2" fontWeight="bold" mb={2}>
        Sprint progress - 72% complete
      </Typography>
      <Button variant="contained">AI Assistant</Button>
    </Card>
  );
};

export default TeamViewCard;
