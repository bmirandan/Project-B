import { createContext } from 'react';

interface IContextProps {
  darkMode: boolean;
  sideMenuOpen: boolean;
  setDarkMode: () => void;
  setLightMode: () => void;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const UIContext = createContext({} as IContextProps);
