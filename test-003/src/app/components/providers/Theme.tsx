'use client';

import { useContext } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { lightTheme, darkTheme } from '../../../../themes';
import { UIContext } from '../../../../context/ui';

type ThemeT = {
  children: JSX.Element;
};


export default function Theme({ children }: ThemeT) {
  const { darkMode } = useContext(UIContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
