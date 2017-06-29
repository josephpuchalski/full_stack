export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_SINGLE_POST = "RECEIVE_SINGLE_POST";
export const REMOVE_SINGLE_POST = "REMOVE_SINGLE_POST";
export const RECEIVE_UPLOAD_POST = "RECEIVE_UPLOAD_POST";
import * as APIUtil from '../util/post_util';

export const receiveUploadPost = (post) => {
  return ({
    type: RECEIVE_UPLOAD_POST,
    post,
  });
};

export const receiveAllPosts = (posts) => {
  return ({
    type: RECEIVE_ALL_POSTS,
    posts,
  });
};

export const receiveSinglePost = (post) => {
  return ({
    type: RECEIVE_SINGLE_POST,
    post,
  });
};


export const removeSinglePost = (post) => {
  return ({
    type: REMOVE_SINGLE_POST,
    post,
  });
};


export const fetchPosts = () => {
  return (dispatch) => {
    return APIUtil.fetchAllPosts()
      .then(
        (posts) => {
          return dispatch(receiveAllPosts(posts));
        },
        (error) => {
          console.log(error);
        }
      );
  };
};

export const fetchPost = (id) => {
  return (dispatch) => {
    return APIUtil.fetchSinglePost(id)
      .then(
        (post) => {
          return dispatch(receiveSinglePost(post));
        },
        (error) => {
          console.log(error);
        }
      );
  };
};

export const createPost = (post) => {
  return (dispatch) => {
    return APIUtil.createPost(post)
      .then(
        (post1) => {
          return dispatch(receiveUploadPost(post1));
        },
        (error) => {
          console.log(error);
        }
      );
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    return APIUtil.deletePost(id)
      .then(
        (post) => {
          return dispatch(removeSinglePost(post));
        },
        (error) => {
          console.log(error);
        }
      );
  };
};
