import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';

class FeedItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {body: ""};

    this.toggleLike = this.toggleLike.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleRemoveComment = this.handleRemoveComment.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleRemoveComment(e) {
    this.props.uncomment(e.currentTarget.parentElement.className);
  }

  handleAddComment(e) {
    e.preventDefault();
    this.props.comment({comment: {body: this.state.body, post_id: this.props.post.id}}).then(() => this.setState({body: ""}));
    // this.setState({body: ""});
  }


  handleLike() {
    this.props.like({like: { post_id: this.props.post.id }});
  }

  handleUnlike() {
    this.props.unlike(this.props.post.id);
  }

  toggleLike() {
    const isAlreadyLiked = this.props.post.likesIds.includes(this.props.currentUser.id);
    if (isAlreadyLiked) {
      return (
        <i onClick={this.handleUnlike} className="fa fa-heartbeat fa-2x" aria-hidden="true"></i>
      );
    } else {
      return (
        <i onClick={this.handleLike} className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
      );
    }
  }


  render() {
    const comments = this.props.post.commentBody.map(
      comment => {
        if (this.props.currentUser.username === comment[0]) {
          return (
            <span className={comment[2]} key={comment[2]}><span className='feed-post-username'>{comment[0]}</span> {comment[1]} <i onClick={this.handleRemoveComment} className="fa fa-times" aria-hidden="true"></i> </span>
          );
        } else {
          return (
            <span className={comment[2]} key={comment[2]}><span className='feed-post-username'>{comment[0]}</span> {comment[1]} </span>
          );
        }

        }, this);

        return (
          <div className="feed-post-item">
            <div className='feed-post-header'>
              <Link to={`/${this.props.post.user}`}><img src={this.props.post.profile_image} /><span>{this.props.post.user}</span></Link>
            </div>
            <img key={this.props.post.id} src={this.props.post.image} />
            <div className='feed-post-detail'>
            <div>
            {this.toggleLike()}
              <label htmlFor={this.props.post.id}><i className="fa fa-commenting-o fa-2x" aria-label="true"></i></label>
              </div>
              <span>{this.props.post.likesCount} Likes</span>
              <span><span className='feed-post-username'>{this.props.post.user}</span> {this.props.post.caption}</span>
              {comments}
              <span>{new Date(this.props.post.created_at).toDateString()}</span>
            </div>
            <form onSubmit={this.handleAddComment}>
            <input type="text" className="comment" id={this.props.post.id} placeholder="Add a comment..." value={this.state.body} onChange={this.update('body')} />
            </form>
          </div>
        );
      }
}

export default FeedItem;
