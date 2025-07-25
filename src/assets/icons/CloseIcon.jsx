import React from "react";
import { Box, useTheme } from "@mui/material";

const CloseIcon = () => {
  const theme = useTheme();

  return (
    <Box
    //   sx={{
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     p: 0.3,
    //     borderRadius: "4px",
    //     cursor: "pointer",
    //     border: `1px solid ${theme.palette.primary.main}`,
    //   }}
    >
      <svg
        id="Close remove"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.414 12.0002L18.707 6.70725C19.098 6.31625 19.098 5.68425 18.707 5.29325C18.316 4.90225 17.684 4.90225 17.293 5.29325L12 10.5862L6.70701 5.29325C6.31601 4.90225 5.68401 4.90225 5.29301 5.29325C4.90201 5.68425 4.90201 6.31625 5.29301 6.70725L10.586 12.0002L5.29301 17.2933C4.90201 17.6842 4.90201 18.3162 5.29301 18.7072C5.48801 18.9022 5.74401 19.0002 6.00001 19.0002C6.25601 19.0002 6.51201 18.9022 6.70701 18.7072L12 13.4143L17.293 18.7072C17.488 18.9022 17.744 19.0002 18 19.0002C18.256 19.0002 18.512 18.9022 18.707 18.7072C19.098 18.3162 19.098 17.6842 18.707 17.2933L13.414 12.0002Z"
          fill="#fff"
        ></path>
      </svg>
    </Box>
  );
};

export default CloseIcon;
