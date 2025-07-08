import { createTheme } from "@mui/material/styles";

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
            padding: "10px 10px",
          },
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
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
