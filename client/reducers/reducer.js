import * as types from '../constants/actionTypes.js';

const initialState = {
  username: '',
  password: '',
  isLoggedIn: false,
  isModalOpen: false,
  top3: [],
  dropdownMenus: {
    high: [],
    medium: [],
    low: [],
  },
  newArticleInput: {
    title: '',
    url: '',
    description: '',
    priority: '',
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ENTER_USER_PASSWORD:
      return {
        ...state,
        username: action.username,
        password: action.password,
      };
    case types.IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        username: action.username,
        password: action.password,
      };
    case types.ENTER_NEW_ARTICLE:
      return {
        ...state,
        newArticleInput: {
          title: action.title,
          url: action.url,
          description: action.description,
          priority: action.priority,
        },
      };
    case types.SUBMIT_NEW_ARTICLE:
      const dropdownMenus = {
        high: [...state.dropdownMenus.high],
        medium: [...state.dropdownMenus.medium],
        low: [...state.dropdownMenus.low],
      };
      dropdownMenus[action.priority].push(action.articleEntry);
      return {
        ...state,
        dropdownMenus,
      };
    case types.POPULATE_MENUS:
      const populateDropdownMenus = {
        high: [...state.dropdownMenus.high],
        medium: [...state.dropdownMenus.medium],
        low: [...state.dropdownMenus.low],
      };
      populateDropdownMenus[action.priority] = [...action.articleArray];
      let top3 = [...state.top3];
      if (action.priority === 'high' && action.articleArray.length >= 3) {
        top3 = [
          populateDropdownMenus.high[0],
          populateDropdownMenus.high[1],
          populateDropdownMenus.high[2],
        ];
      }
      return {
        ...state,
        dropdownMenus: populateDropdownMenus,
        top3,
      };
    default:
      return state;
  }
};

export default mainReducer;
