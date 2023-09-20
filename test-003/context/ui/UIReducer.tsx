import { UIState } from '.';

type UIActionT =
  | { type: 'UI - Open SideBar' }
  | { type: 'UI - Close SideBar' }
  | { type: 'UI - Set DarkMode' }
  | { type: 'UI - Set LightMode' };

export const uiReducer = (state: UIState, action: UIActionT): UIState => {
  switch (action.type) {
    case 'UI - Open SideBar':
      return {
        ...state,
        sideMenuOpen: true,
      };

    case 'UI - Close SideBar':
      return {
        ...state,
        sideMenuOpen: false,
      };

    case 'UI - Set DarkMode':
      return {
        ...state,
        darkMode: true,
      };

    case 'UI - Set LightMode':
      return {
        ...state,
        darkMode: false,
      };

    default:
      return state;
  }
};
