import { createTheme } from "@mui/material/styles";
import ProfileIcon from "./assets/icons/ProfileIcon";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4971f4",
      //   light: "#7b94f7",
      //   dark: "#2851f1",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#8B8E96",
      light: "",
      dark: "",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      //   paper: "#f9f9f9",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
    grey: {
      50: "#f9f9f9",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      //   fontSize: "2.5rem",
      //   fontSize: "4rem",
      fontSize: "40px",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.4,
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.43,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1400px !important", // Set a fixed max width
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          //   borderRadius: "32px",
          padding: "10px 18px",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: {
          backgroundColor: "#4971f4",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#2851f1",
          },
        },
        outlined: {
          borderColor: "#4971f4",
          color: "#4971f4",
          "&:hover": {
            backgroundColor: "#f6f6f6",
            borderColor: "#4971f4",
          },
        },
        text: {
          color: "#4971f4",
          "&:hover": {
            backgroundColor: "#f6f6f6",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            background: "#F5F9FC",
          },
          "& .MuiOutlinedInput-input": {
            // padding: "10px 10px",
            fontSize: "14px",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "#F5F9FC",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#eee", // your custom border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#B6BAEA", // border on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#4971F4", // border when focused
          },
        },
        input: {
          // optional: customize text padding, font, etc.
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          //   width: 40,
          //   height: 40,
          //   backgroundColor: "#4971f4",
          //   color: "#ffffff",
          //   fontWeight: 600,
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          // Custom styles for Box components can be added here
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          // Custom typography styles
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          //   backgroundColor: "#ffffff",
          //   color: "#000000",
          //   boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "none",
          padding: "32px",
          background: "#F5F9FC",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 8,
          borderRadius: 6,
          background: "#E6E9ED",
        },
        bar: {
          borderRadius: 6,
          backgroundColor: "#77B8A0",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: "1rem", // 👈 change this to whatever padding you want
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 40, // default width
          height: 40, // default height
          fontSize: 20, // affects icon/text inside
          backgroundColor: "#E6E9ED",
          cursor: "pointer",
        },
      },
    },
    MuiChip: {
      variants: [
        {
          props: { variant: "back-end" },
          style: {
            background: "#E5E7FF",
            color: "#7B80B7",
          },
        },
        {
          props: { variant: "ui-design" },
          style: {
            background: "#CBEADE",
            color: "#5F9782",
          },
        },
        {
          props: { variant: "ux-design" },
          style: {
            background: "#FDEAE2",
            color: "#F7946F",
          },
        },
        {
          props: { variant: "front-end" },
          style: {
            background: "#DCE9FF",
            color: "#5681C6",
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: "16px",
          fontSize: "12px",
          fontWeight: "bold",
        },
      },
    },
  },
});

export default theme;
