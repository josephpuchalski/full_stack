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
      <section>
        <li key={this.props.post.id}>
        <img className="user-posts" src={this.props.post.image} />
          <Link className="post" to={`/posts/${this.props.post.id}`}>{this.props.post.caption}</Link>
          <button onClick={this.handleDelete}>Delete</button>
        </li>
      </section>
    );
  }
}

export default PostIndexItem;
