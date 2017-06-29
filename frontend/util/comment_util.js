export const addComment = (id) => {
  return $.ajax({
    method: 'POST',
    url: 'api/likes/',
    data: id,
  });
};

export const removeComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`
  });
};
