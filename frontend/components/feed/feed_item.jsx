import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';

class FeedItem extends React.Component {
  constructor(props) {

    super(props);
    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike() {
    const isAlreadyLiked = this.props.post.likesIds.includes(this.props.currentUser.id);
    if (isAlreadyLiked) {
      return (
        <i className="fa fa-heartbeat fa-2x" aria-hidden="true"></i>
      );
    } else {
      return (
        <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
      );
    }
  }

  render() {
    const comments = this.props.post.commentBody.map(
      comment => {
        return (
          <span key={comment[2]}><span className='feed-post-username'>{comment[0]}</span> {comment[1]}</span>
        );}
      );
        return (
          <div className="feed-post-item">
            <div className='feed-post-header'>
              <Link to={`/${this.props.post.user}`}><img src={this.props.post.profile_image} /><span>{this.props.post.user}</span></Link>
            </div>
            <img key={this.props.post.id} src={this.props.post.image} />
            <div className='feed-post-detail'>
            <div>
            {this.toggleLike()}
              <label htmlFor="comment"><i className="fa fa-commenting-o fa-2x" aria-label="true"></i></label>
              </div>
              <span>{this.props.post.likesCount} Likes</span>
              <span><span className='feed-post-username'>{this.props.post.user}</span> {this.props.post.caption}</span>
              {comments}
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
