export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
import * as APIUtil from '../util/follow_util';


export const followUser = (follow_details) => {
  return ({
    type: FOLLOW_USER,
    follow_details,
  });
};

export const unfollowUser = (follow_details) => {
  return ({
    type: UNFOLLOW_USER,
    follow_details,
  });
};

export const follow = id => dispatch => (
  APIUtil.followUser(id).then(
    follow_details => {
      return dispatch(followUser(follow_details));
    }
  )
);

export const unfollow = id => dispatch => (
  APIUtil.unfollowUser(id).then(
    follow_details => {
      return dispatch(unfollowUser(follow_details));
    }
  )
);
