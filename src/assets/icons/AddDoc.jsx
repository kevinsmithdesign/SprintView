import React from "react";
import { Box, useTheme } from "@mui/material";

const AddDocIcon = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 0.3,
        borderRadius: "4px",
        cursor: "pointer",
        border: `1px solid ${theme.palette.primary.main}`,
      }}
    >
      <svg
        id="Plus 4"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H18"
          stroke={theme.palette.primary.main}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M12 6V18"
          stroke={theme.palette.primary.main}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </Box>
  );
};

export default AddDocIcon;
