'use client';

import { useReducer } from 'react';
import { UIContext, uiReducer } from '.';

export interface UIState {
  sideMenuOpen: boolean;
  darkMode: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  darkMode: true,
  isAddingEntry: false,
  isDragging: false,
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
        setDarkMode,
        setLightMode,
        setIsAddingEntry,
        setDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
