export const getUser = id => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: id
  })
);
