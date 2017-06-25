import React from 'react';
import { Link } from 'react-router-dom';
import PostForm from './post_form';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }


  render () {
    const postItems = this.props.posts.map(
      post => {
        return (
          <PostIndexItem key={post.id} post={ post } deletePost={ this.props.deletePost }
            fetchPosts={this.props.fetchPosts}/>
        );}
      );

    return (
      <div className="main-container">
      <h1>Posts me</h1>
          <ul>
          {postItems}
          </ul>
      </div>
    );
  }
}

export default PostIndex;
