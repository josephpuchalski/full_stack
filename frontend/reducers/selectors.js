import { values } from 'lodash';

export const selectAllPosts = ({posts}) => {
  return values(posts);
};

export const selectAllPostsFromUser = (posts) => {
  if (posts !== undefined) {
    return posts
  } else {
    return [];
  }
}
