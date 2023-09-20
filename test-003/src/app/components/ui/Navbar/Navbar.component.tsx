'use client';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { UIContext } from '../../../../../context/ui/UIContext';

import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function DarkThemeHandler() {
  const { darkMode, setDarkMode, setLightMode } = useContext(UIContext);
  return <Switch {...label} onChange={darkMode ? setLightMode : setDarkMode} />;
}

export function Navbar() {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6"> OpenJira</Typography>
        <DarkThemeHandler />
      </Toolbar>
    </AppBar>
  );
}
