import { userConstants } from "../constants";
import { AsyncStorage } from "react-native";

const user = null//(AsyncStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};
export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggedIn: false,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    case userConstants.LOAD_STATE:
      return {
        loggedIn: true,
        user: action.user
      }
    default:
      return state;
  }
}
