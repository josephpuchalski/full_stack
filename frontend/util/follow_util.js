export const followUser = (follow_information) => {
  return $.ajax({
    method: 'POST',
    url: 'api/follows/',
    data: follow_information
  });
};

export const unfollowUser = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`,
  });
};
