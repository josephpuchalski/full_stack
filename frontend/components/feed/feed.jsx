import React from 'react';
import { values } from 'lodash';
import FeedItem from './feed_item';

class Feed extends React.Component {
  constructor(props) {

    super(props);
  }

  componentDidMount() {
    this.props.getUser(this.props.currentUser.username);
    this.props.fetchPosts();
  }


  render() {
    let postFeed = values(this.props.feedPosts).map(
      post => {
        return (
          <FeedItem comment={this.props.comment} uncomment={this.props.uncomment} like={ this.props.like } unlike= { this.props.unlike } key={post.id} post={post} currentUser={this.props.currentUser}/>
        );
      }
    );

    postFeed = postFeed.reverse();

    return (
      <div className='render-fix post-feed-container'>
      {postFeed}
      </div>
  );}
}

export default Feed;
