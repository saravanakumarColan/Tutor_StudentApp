import * as types from "../ActionTypes";

export function logoutCall() {
  return function (dispatch) {
    dispatch(LogoutPending());
  };
}
export function LogoutPending() {
  return {
    type: types.LOGOUT,
  };
}
