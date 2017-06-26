import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import {merge} from 'lodash';
const defaultState = Object.freeze({modalIsOpen: false, postId: null});

const ModalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return {modalIsOpen: true, postId: action.postId};
    case CLOSE_MODAL:
      return {modalIsOpen: false, postId: null};
    default:
    return state;
  }
};



export default ModalReducer;
