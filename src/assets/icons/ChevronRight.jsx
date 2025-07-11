import React from "react";
import { Box, useTheme } from "@mui/material";

const ChevronRightIcon = () => {
  return (
    <Box sx={{ rotate: "270deg" }}>
      <svg
        id="Caret Down MD"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 10L12 14L8 10"
          stroke="#000000"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </Box>
  );
};

export default ChevronRightIcon;
