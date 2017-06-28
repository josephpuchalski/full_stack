import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';

class FeedItem extends React.Component {
  constructor(props) {

    super(props);
  }



  render() {
    debugger;
        return (
          <div className="feed-post-item">
            <div className='feed-post-header'>
            <Link to={`/${this.props.post.user}`}><img src={this.props.post.profile_image} /><span>{this.props.post.user}</span></Link>
            </div>
            <img key={this.props.post.id} src={this.props.post.image} />
          </div>
        );
      }
}

export default FeedItem;
