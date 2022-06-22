import { PaletteOptions } from "@mui/material";

export enum Color {
  Primary = "#2d82ff",
  Secondary = "rgba(0, 0, 0, 0.5)",
}

export const basicPalette: PaletteOptions = {
  primary: {
    main: Color.Primary,
  },
  secondary: {
    main: Color.Secondary,
  },
};
