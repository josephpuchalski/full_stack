export const getUser = username => (
  $.ajax({
    method: 'GET',
    url: `api/users/${username}`,
  })
);
