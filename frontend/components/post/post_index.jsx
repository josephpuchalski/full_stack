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
          <PostIndexItem openModal={this.props.openModal} key={post.id} post={ post } deletePost={ this.props.deletePost }
            fetchPosts={this.props.fetchPosts}/>
        );}
      );

    return (
      <div className="photo-container">
          {postItems}
      </div>
    );
  }
}

export default PostIndex;
