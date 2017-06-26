import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import ModalBox from './modal_box';

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
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalBox);
