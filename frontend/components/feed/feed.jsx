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
    const postFeed = values(this.props.feedPosts).map(
      post => {
        return (
          <FeedItem key={post.id} post={post} />
        );
      }
    );

    return (
      <div className='render-fix post-feed-container'>
      {postFeed}
      </div>
  );}
}

export default Feed;
