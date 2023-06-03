import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import React from 'react';


type ThemeProp = {
  children: JSX.Element
}


export enum themePalette {
  BG = "#140325",
  SECONDARY_BG = "#28073D",
  MAIN_COLOR = "#F274C4",
  SECONDARY_COLOR = "#400B61",
  GLOBAL_FONT = "'JetBrains Mono', monospace"
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: themePalette.BG,
      paper: themePalette.SECONDARY_BG,
    },
    primary: {
      main: themePalette.MAIN_COLOR
    },
    secondary: {
      main: themePalette.SECONDARY_COLOR
    },
    text: {
      primary: themePalette.MAIN_COLOR
    }
  },
  typography: {
    fontFamily: themePalette.GLOBAL_FONT,
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightBold: 700
  }
});


export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
};
