 //srccomponentsThemeProvider.tsx

use client;

import React, { useState, useMemo } from react;
import { ThemeProvider as MuiThemeProvider, createTheme } from @muimaterialstyles;
import CssBaseline from @muimaterialCssBaseline;

export default function ThemeProvider({ children } { children React.ReactNode }) {
  const [mode, setMode] = useStatelight  dark(light);

  const theme = useMemo(
    () =
      createTheme({
        palette {
          mode,
          primary {
            main mode === light  #125824  #127924,
          },
          secondary {
            main mode === light  #dc004e  #f48fb1,
          },
          background {
            default mode === light  #f5f5f5  #121212,
          },
        },
        typography {
          fontFamily Roboto, Arial, sans-serif,
 },
      }),
    [mode]
  );

  const toggleTheme = () = {
    setMode((prevMode) = (prevMode === light  dark  light));
  };

  return (
    MuiThemeProvider theme={theme}
      CssBaseline 
      button onClick={toggleTheme}Toggle Themebutton { Button to toggle theme }
      {children}
    MuiThemeProvider
  );
}