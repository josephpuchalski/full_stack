export const likePost = (id) => {
  return $.ajax({
    method: 'POST',
    url: 'api/likes/',
    data: id,
  });
};

export const unlikePost = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`
  });
};
