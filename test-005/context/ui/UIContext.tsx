import { createContext } from 'react';

interface IContextProps {
  isSideMenuOpen: boolean;
  setSideMenuState: (isSideMenuOpen: boolean) => void;
}

export const UIContext = createContext({} as IContextProps);
