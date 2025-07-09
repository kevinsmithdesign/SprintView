import React from "react";
import { Box, useTheme } from "@mui/material";

const EmojiIcon = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 0.3,
        borderRadius: "4px",
        mr: 0.5,
        cursor: "pointer",
        border: `1px solid ${theme.palette.primary.main}`,
      }}
    >
      <svg
        id="Smiling"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21C16.9709 21 21 16.9699 21 12C21 7.02908 16.9709 3 12 3C7.02908 3 3 7.02908 3 12C3 16.9699 7.02908 21 12 21Z"
          stroke={theme.palette.primary.main}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M9.12109 14.2891C9.82261 15.2017 10.8549 15.7709 12.0011 15.7709C13.1473 15.7709 14.1796 15.2017 14.8811 14.2891"
          stroke={theme.palette.primary.main}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M8.76953 9.00533V8.95377M8.72401 8.80078C8.60001 8.80078 8.49901 8.90178 8.50001 9.02578C8.50001 9.14978 8.60101 9.25078 8.72501 9.25078C8.84901 9.25078 8.95001 9.14978 8.95001 9.02578C8.95001 8.90078 8.84901 8.80078 8.72401 8.80078Z"
          stroke={theme.palette.primary.main}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M15.2307 9.00533V8.95377M15.224 8.80078C15.1 8.80078 14.999 8.90178 15 9.02578C15 9.14978 15.101 9.25078 15.225 9.25078C15.349 9.25078 15.45 9.14978 15.45 9.02578C15.45 8.90078 15.349 8.80078 15.224 8.80078Z"
          stroke={theme.palette.primary.main}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </Box>
  );
};

export default EmojiIcon;
