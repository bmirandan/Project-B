import { UIState } from '.';
import { customTheme, lightTheme, darkTheme } from '../../themes';
import { ThemeT } from './UIContext';

const themes = {
  custom: customTheme,
  light: lightTheme,
  dark: darkTheme,
};

type UIActionT =
  | { type: 'UI - Open SideBar' }
  | { type: 'UI - Close SideBar' }
  | { type: 'UI - Set Theme'; theme: ThemeT }
  | { type: 'UI - Set IsAdding'; isAdding: boolean }
  | { type: 'UI - Set Dragging'; isDragging: boolean };

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

    case 'UI - Set Theme':
      return {
        ...state,
        themeValue: action.theme,
        theme: themes[action.theme],
      };
    case 'UI - Set IsAdding':
      return {
        ...state,
        isAddingEntry: action.isAdding,
      };
    case 'UI - Set Dragging':
      return {
        ...state,
        isDragging: action.isDragging,
      };
    default:
      return state;
  }
};
