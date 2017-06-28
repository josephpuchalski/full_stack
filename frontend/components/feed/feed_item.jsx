import React from 'react';
import { values } from 'lodash';

class FeedItem extends React.Component {
  constructor(props) {

    super(props);
  }



  render() {
        return (
          <div className="feed-post-item">
            <img key={this.props.post.id} src={this.props.post.image} />
          </div>
        );
      }
}

export default FeedItem;
