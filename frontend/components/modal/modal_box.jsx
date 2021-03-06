import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import PostShow from '../post/post_show';
import App from '../app';
const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)',
    zIndex            : 1000,
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

class ModalBox extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   modalIsOpen: false
    // };


    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

componentWillMount() {
  // Modal.setAppElement('body');
}

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.props.closeModal();
  }



  render() {
    return (

        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Post"
        >
        <PostShow closeModal={this.closeModal} user={this.props.user} deletePost={this.props.deletePost} postId={this.props.postId}/>
        </Modal>
    );
  }
}
// onAfterOpen={this.afterOpenModal}
// <h2 ref={subtitle => this.subtitle = subtitle}>PHOTO</h2>
// <button onClick={this.closeModal}>close</button>
// <div>POSTS GO HERE</div>
export default ModalBox;
