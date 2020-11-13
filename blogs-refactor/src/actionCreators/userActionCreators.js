import { setNotification } from './notificationActionCreator';
import loginService from '../services/login';
import userService from '../services/user';

export const userLogin = (userCredentials, history) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login(userCredentials);
      dispatch(setCurrentUser(user));
      history.push('/');
    } catch (err) {
      dispatch(
        setNotification({
          message: 'Wrong username or password!',
          type: 'error',
        })
      );
    }
  };
};

export const setCurrentUser = (userCredentials) => {
  return {
    type: 'SET_CURRENT_USER',
    user: userCredentials,
  };
};

export const userLogout = () => {
  loginService.logout();
  return {
    type: 'SET_CURRENT_USER',
    user: null,
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    const users = await userService.getAllUsers();
    dispatch({
      type: 'GET_ALL_USERS',
      payload: users,
    });
  };
};

export const getUserById = (id) => {
  return async (dispatch) => {
    const user = await userService.getUserById(id);
    dispatch({
      type: 'GET_USER_BY_ID',
      payload: user,
    });
  };
};
