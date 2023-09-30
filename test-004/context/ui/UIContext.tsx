import { Theme } from '@mui/material';
import { createContext } from 'react';

export type ThemeT = 'light' | 'dark' | 'custom';

interface IContextProps {
  themeValue: ThemeT;
  theme: Theme;
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  setTheme: (theme: ThemeT) => void;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  setDragging: (isDragging: boolean) => void;
}

export const UIContext = createContext({} as IContextProps);
