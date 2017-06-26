import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import ModalBox from './modal_box';
import {deletePost} from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.user,
    modalIsOpen: state.modal.modalIsOpen,
    postId: state.modal.postId
  });
};

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
  deletePost: (post) => dispatch(deletePost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalBox);
