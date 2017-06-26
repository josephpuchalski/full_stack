import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import PostShow from '../post/post_show';
import App from '../app';
const customStyles = {
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
          contentLabel="Example Modal"
        >
        <PostShow postId={this.props.postId}/>
        </Modal>
    );
  }
}
// onAfterOpen={this.afterOpenModal}
// <h2 ref={subtitle => this.subtitle = subtitle}>PHOTO</h2>
// <button onClick={this.closeModal}>close</button>
// <div>POSTS GO HERE</div>
export default ModalBox;
