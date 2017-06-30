import React from 'react';
import { values } from 'lodash';
import FeedItem from './feed_item';

class Feed extends React.Component {
  constructor(props) {

    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }


  render() {
    let postFeed = values(this.props.feedPosts).map(
      post => {
        return (
          <FeedItem key={post.id} post={post} currentUser={this.props.currentUser}/>
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
