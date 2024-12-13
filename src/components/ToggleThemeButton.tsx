// src/components/ToggleThemeButton.tsx
"use client";

import React from 'react';
import { Button, useTheme } from '@mui/material';

const ToggleThemeButton: React.FC<{ toggleMode: () => void }> = ({ toggleMode }) => {
  const theme = useTheme();
  const mode = theme.palette.mode; 

  return (
    <Button variant="contained" onClick={toggleMode}>
      Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

export default ToggleThemeButton;

