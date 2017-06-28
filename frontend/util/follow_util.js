export const followUser = (id) => {
  return $.ajax({
    method: 'POST',
    url: 'api/follows/',
    data: id
  });
};

export const unfollowUser = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`,
  });
};
