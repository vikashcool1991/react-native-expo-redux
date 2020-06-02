import { userConstants } from "../constants";
import { userService } from '../services';

function success(user) {
  return {
    type: userConstants.LOGIN_SUCCESS,
    user,
  };
}

function request(user) {
  return {
    type: userConstants.LOGIN_REQUEST,
    user,
  };
}

function failure(error) {
  return {
    type: userConstants.LOGIN_FAILURE,
    error,
  };
}

export const userActions = {
  login(username, password, navigation) {
    return (dispatch) => {
      dispatch(request({ username, password }));
      userService.login(username, password).then(
        (user) => {
          dispatch(success(user));
          navigation.navigate("HomeNav");
        },
        (error) => {
          dispatch(failure(error));
        }
      );
    };
  },
  logout(navigation) {
    userService.logout().then(()=>{});
    navigation.navigate("Login");
    return {
      type: userConstants.LOGOUT,
    };
  },
  register() {},
  loadState(user) {
    return {
      type: userConstants.LOAD_STATE,
      user
    }
  }
};
