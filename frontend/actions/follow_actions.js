export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
import * as APIUtil from '../util/follow_util';


export const followUser = (follow) => {
  return ({
    type: FOLLOW_USER,
    follow,
  });
};

export const unfollowUser = (follow) => {
  return ({
    type: UNFOLLOW_USER,
    follow,
  });
};

export const follow = id => dispatch => (
  APIUtil.followUser(id).then(
    follow => {
      return dispatch(followUser(follow));
    }
  )
);

export const unfollow = id => dispatch => (
  APIUtil.unfollowUser(id).then(
    follow => {
      return dispatch(unfollowUser(follow));
    }
  )
);
