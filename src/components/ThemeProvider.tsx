"use client";

import React, { useState, useMemo } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#125824" : "#127924",
          },
          secondary: {
            main: mode === "light" ? "#dc004e" : "#f48fb1",
          },
          background: {
            default: mode === "light" ? "#f5f5f5" : "#121212",
          },
        },
        typography: {
          fontFamily: "Roboto, Arial, sans-serif",
          h1: {
            fontSize: "3rem", 
          },
        },
          
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </MuiThemeProvider>
  );
}
