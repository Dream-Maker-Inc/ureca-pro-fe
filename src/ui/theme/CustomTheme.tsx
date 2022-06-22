import { createTheme } from "@mui/material/styles";
import { basicPalette } from "./color";

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
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
});
