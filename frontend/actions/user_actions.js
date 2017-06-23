import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => {
  return ({
    type: RECEIVE_USER,
    user,
  });
};

export const getUser = username => dispatch => (
  APIUtil.getUser(username).then(
    user => {
    return dispatch(receiveUser(user));
    })
);
