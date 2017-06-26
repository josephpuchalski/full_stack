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
      <div onClick={this.handleClick}>
        <img className="user-posts" src={this.props.post.image} />
      </div>
    );
  }
}

// <button onClick={this.handleDelete}>Delete</button>
export default PostIndexItem;
