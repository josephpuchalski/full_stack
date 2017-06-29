import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';

class FeedItem extends React.Component {
  constructor(props) {

    super(props);
  }



  render() {
        return (
          <div className="feed-post-item">
            <div className='feed-post-header'>
              <Link to={`/${this.props.post.user}`}><img src={this.props.post.profile_image} /><span>{this.props.post.user}</span></Link>
            </div>
            <img key={this.props.post.id} src={this.props.post.image} />
            <div className='feed-post-detail'>
            <div>
              <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
              <label htmlFor="comment"><i className="fa fa-commenting-o fa-2x" aria-label="true"></i></label>
              </div>
              <span>{this.props.post.likesCount} Likes</span>
              <span>{new Date(this.props.post.created_at).toDateString()}</span>
              <form>
              <textarea id="comment" placeholder="Add Comment"></textarea>
              </form>
            </div>
          </div>
        );
      }
}

export default FeedItem;
