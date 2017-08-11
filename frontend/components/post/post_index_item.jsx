import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
  }

  handleClick() {
    this.props.openModal(this.props.post.id);
  }


  render() {
    return (
      <div className="post-image-sizer" onClick={this.handleClick}>
      <i className="fa fa-heart-o fa-2x heart" aria-hidden="true"> {this.props.post.likes.length}</i>
      <i className="fa fa-comment-o fa-2x bubbles" aria-hidden="true"> {this.props.post.comments.length}</i>
      <img className="user-posts" src={this.props.post.image}  />
      </div>
    );
  }
}

// <button onClick={this.handleDelete}>Delete</button>
export default PostIndexItem;
