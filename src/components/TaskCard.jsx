// import React from "react";
// import {
//   Card,
//   Typography,
//   Stack,
//   Box,
//   useTheme,
//   Avatar,
//   Chip,
//   LinearProgress,
//   Button,
// } from "@mui/material";

// const TaskCard = ({ label, variant, title, commentCount }) => {
//   const theme = useTheme();
//   return (
//     <Card
//       sx={{
//         background: "#fff",
//         mb: 2,
//         position: "relative",
//         cursor: "pointer",
//         overflow: "hidden",
//         "&::after": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: theme.palette.primary.main,
//           opacity: 0,
//           transition: "opacity 0.3s ease",
//         },
//         "&:hover::after": {
//           opacity: 0.2, // adjust to your desired overlay strength
//         },
//       }}
//     >
//       <Chip variant={variant} label={label} sx={{ mb: 1 }} />
//       <Typography fontWeight="bold" mb={1.5}>
//         {title}
//       </Typography>
//       {/* <Avatar sx={{ mb: 4 }} /> */}
//       <Stack
//         flexDirection="row"
//         sx={{
//           mb: 2,
//           "& .MuiAvatar-root": {
//             border: "2px solid #F5F9FC",
//             marginLeft: "-8px",
//             "&:first-of-type": {
//               marginLeft: 0,
//             },
//           },
//         }}
//       >
//         <Avatar src={User6} />
//         <Avatar src={User1} />
//         <Avatar src={User3} />
//         <Avatar src={User4} />
//         <Avatar src={User2} />
//         <Avatar src={User5} />
//       </Stack>

//       <Typography>{commentCount} Comments</Typography>
//     </Card>
//   );
// };

// export default TaskCard;

import React from "react";
import {
  Card,
  Typography,
  Stack,
  Box,
  useTheme,
  Avatar,
  Chip,
  LinearProgress,
  Button,
} from "@mui/material";

const TaskCard = ({ label, variant, title, commentCount, avatars = [] }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        background: "#fff",
        mb: 2,
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: theme.palette.primary.main,
          opacity: 0,
          transition: "opacity 0.3s ease",
        },
        "&:hover::after": {
          opacity: 0.2,
        },
      }}
    >
      <Chip variant={variant} label={label} sx={{ mb: 1 }} />
      <Typography fontWeight="bold" mb={1.5}>
        {title}
      </Typography>

      {/* Only render avatar stack if avatars exist */}
      {avatars.length > 0 && (
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
          {avatars.map((avatar, index) => (
            <Avatar
              key={index}
              src={avatar.src}
              alt={avatar.alt || `User ${index + 1}`}
            />
          ))}
        </Stack>
      )}

      <Typography>{commentCount} Comments</Typography>
    </Card>
  );
};

export default TaskCard;
