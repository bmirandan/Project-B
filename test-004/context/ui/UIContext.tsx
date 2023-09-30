import { createContext } from 'react';

interface IContextProps {
  darkMode: boolean;
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  setDarkMode: () => void;
  setLightMode: () => void;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  setDragging: (isDragging: boolean) => void;
}

export const UIContext = createContext({} as IContextProps);
