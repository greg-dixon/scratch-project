import * as types from '../constants/actionTypes.js';

export const loginUserAction = (username, password) => ({
  type: types.ENTER_USER_PASSWORD,
  username,
  password,
});

export const loggingInAction = (boolean) => ({
  type: types.IS_LOGGED_IN,
  isLoggedIn: boolean,
  username: '',
  password: '',
});

export const enterNewArticleAction = (title, url, description, priority) => ({
  type: types.ENTER_NEW_ARTICLE,
  title,
  url,
  description,
  priority,
});

export const submitNewArticleAction = (articleEntry) => ({
  type: types.SUBMIT_NEW_ARTICLE,
  priority: articleEntry.priority,
  articleEntry,
});

export const populateMenus = (articleArray, priority) => ({
  type: types.POPULATE_MENUS,
  priority,
  articleArray,
});

loginUserAction('name', 'pass');
