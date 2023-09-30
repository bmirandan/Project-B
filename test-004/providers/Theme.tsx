'use client';

import { useContext } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { UIContext } from '../context/ui';
import { darkTheme } from '../themes';

type ThemeT = {
  children: JSX.Element[];
};

export default function Theme({ children }: ThemeT) {
  const { theme } = useContext(UIContext);

  return (
    <ThemeProvider theme={theme ?? darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
