export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";


export const openModal = (postId) => {
  return ({
    type: OPEN_MODAL,
    postId
  });
};

export const closeModal = () => {
  return ({
    type: CLOSE_MODAL,
  });
};
