import * as APIUtil from '../util/session_api_utl';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => {
  return ({
      type: RECEIVE_CURRENT_USER ,
      currentUser,
  });
};

export const receiveErrors = errors => {
  return ({
    type: RECEIVE_ERRORS,
    errors,
  });
};

export const login = user => dispatch => {
  return APIUtil.login(user).then(user => {
    return dispatch(receiveCurrentUser(user));
  });
};

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(user => {
    return dispatch(receiveCurrentUser(user));
  });
};

export const logout = () => dispatch => {
  return APIUtil.login().then(user => {
    return dispatch(receiveCurrentUser(null));
  });
};
