'use client';

import { useReducer } from 'react';
import { UIContext, uiReducer } from '.';

export interface UIState {
  sideMenuOpen: boolean;
  darkMode: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  darkMode: false,
};

type UIProviderT = {
  children: JSX.Element;
};

export function UIProvider({ children }: UIProviderT) {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open SideBar' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close SideBar' });
  };

  const setDarkMode = () => {
    dispatch({ type: 'UI - Set DarkMode' });
  };

  const setLightMode = () => {
    dispatch({ type: 'UI - Set LightMode' });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setDarkMode,
        setLightMode,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
