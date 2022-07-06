import * as types from '../ActionTypes';
import authApi from '../../Services/Api';
import {login} from '../../Services/ApiLists';

export function loginCall(params) {
  return function (dispatch) {
    dispatch(LoginPending());
    return authApi
      .PostRequest(login, params)
      .then(response => {
        console.log('success', response);
        dispatch(LoginSuccess(response));
      })
      .catch(error => {
        console.log('error', error);
        global.functions.ShowAlert(error?.message, global.const.danger);
        dispatch(LoginError());
      });
  };
}
export function LoginPending() {
  return {
    type: types.LOGIN_INITIATED,
  };
}
export function LoginSuccess(response) {
  return {
    type: types.LOGIN_SUCCESS,
    response,
  };
}
export function LoginError() {
  return {
    type: types.LOGIN_FAILURE,
  };
}
