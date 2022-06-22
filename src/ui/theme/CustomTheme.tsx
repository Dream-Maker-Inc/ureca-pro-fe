import { createTheme } from "@mui/material/styles";
import { basicPalette } from "./Color";

export const defaultTheme = createTheme({
  palette: basicPalette,

  typography: {
    allVariants: {
      fontFamily: "Noto Sans KR",
      lineHeight: 1,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
        outlined: {
          borderColor: "#ccc",
        },
      },
    },
  },
});
