import { UIState } from '.';

type UIActionT = { type: 'UI - Set SideBar'; isSideMenuOpen: boolean };

export const uiReducer = (state: UIState, action: UIActionT): UIState => {
  switch (action.type) {
    case 'UI - Set SideBar':
      return {
        ...state,
        isSideMenuOpen: action.isSideMenuOpen,
      };
    default:
      return state;
  }
};
