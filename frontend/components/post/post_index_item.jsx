import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
  }



  render() {
    return (
          <Link className="post" to={`/posts/${this.props.post.id}`}><img className="user-posts" src={this.props.post.image} /></Link>
    );
  }
}

// <button onClick={this.handleDelete}>Delete</button>
export default PostIndexItem;
