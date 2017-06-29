export const addComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: 'api/likes/',
    data: comment,
  });
};

export const removeComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`
  });
};
