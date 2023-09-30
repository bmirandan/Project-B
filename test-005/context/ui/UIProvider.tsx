'use client';

import { useReducer } from 'react';
import { UIContext, uiReducer } from '.';

export interface UIState {
  isSideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isSideMenuOpen: false,
};

type UIProviderT = {
  children: JSX.Element;
};

const getInitialFromLocal: UIState = {
  ...UI_INITIAL_STATE,
};

export function UIProvider({ children }: UIProviderT) {
  const [state, dispatch] = useReducer(uiReducer, getInitialFromLocal);

  const setSideMenuState = (isSideMenuOpen: boolean) => {
    dispatch({ type: 'UI - Set SideBar', isSideMenuOpen: isSideMenuOpen });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        setSideMenuState,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
