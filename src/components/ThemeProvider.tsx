'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark' | null;
  const [mode, setMode] = useState(savedMode || 'light');


  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode); 
  };


  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#285e2b',
          },
          secondary: {
            main: '#dc004e',
          },
          background: {
            default: mode === 'light' ? '#e8f2e1' : '#121212',
          },
        },
        typography: {
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            h1: {
                fontSize: '2rem',
                fontWeight: 700, 
                fontFamily: "'Roboto', sans-serif",
            },
        },
      }),
    [mode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
