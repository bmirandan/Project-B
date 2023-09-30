'use client';

import { useReducer } from 'react';
import { UIContext, uiReducer } from '.';
import { Theme } from '@mui/material';
import { customTheme, darkTheme, lightTheme } from '../../themes';
import { ThemeT } from './UIContext';
import Cookies from 'js-cookie';

export interface UIState {
  theme: Theme;
  themeValue: ThemeT;
  sideMenuOpen: boolean;
  darkMode: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const themes = {
  custom: customTheme,
  light: lightTheme,
  dark: darkTheme,
};

const UI_INITIAL_STATE: UIState = {
  themeValue: 'dark',
  theme: darkTheme,
  sideMenuOpen: false,
  darkMode: true,
  isAddingEntry: false,
  isDragging: false,
};

type UIProviderT = {
  children: JSX.Element;
};

const getInitialFromLocal: UIState = {
  ...UI_INITIAL_STATE,
  themeValue: (localStorage.getItem('theme') ?? 'dark') as ThemeT,
  theme: themes[(localStorage.getItem('theme') ?? 'dark') as ThemeT],
};

export function UIProvider({ children }: UIProviderT) {
  const [state, dispatch] = useReducer(uiReducer, getInitialFromLocal);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open SideBar' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close SideBar' });
  };

  const setTheme = (theme: ThemeT) => {
    localStorage.setItem('theme', theme);
    Cookies.set('theme', theme);
    dispatch({ type: 'UI - Set Theme', theme });
  };

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: 'UI - Set IsAdding', isAdding });
  };

  const setDragging = (isDragging: boolean) => {
    dispatch({ type: 'UI - Set Dragging', isDragging });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setTheme,
        setIsAddingEntry,
        setDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
