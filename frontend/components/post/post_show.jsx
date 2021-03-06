import React from "react";
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchPost} from '../../actions/post_actions';
import { getUser } from '../../actions/user_actions';
import { like, unlike } from '../../actions/like_actions';
import { comment, uncomment } from '../../actions/comment_actions';

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: ""};
    this.handleClick = this.handleClick.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleRemoveComment = this.handleRemoveComment.bind(this);
    this.allowPostDelete = this.allowPostDelete.bind(this);
  }

  componentDidMount () {
    this.props.fetchPost(this.props.postId);
  }

  handleLike() {
    this.props.like({like: { post_id: this.props.postId }});
  }

  handleUnlike() {
    this.props.unlike(this.props.postId);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  toggleLike() {
    const isAlreadyLiked = this.props.post.likesIds.includes(this.props.currentUser.id);
    if (isAlreadyLiked) {
      return (
        <i onClick={this.handleUnlike} className="fa fa-heartbeat fa-lg" aria-hidden="true"></i>
      );
    } else {
      return (
        <i onClick={this.handleLike} className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
      );
    }
  }

  handleClick(e) {
    this.props.closeModal();
    this.props.deletePost(this.props.postId).then( () => this.props.getUser(this.props.user.username));
  }

  handleRemoveComment(e) {
    this.props.uncomment(e.currentTarget.parentElement.className);
  }

  handleAddComment(e) {
    e.preventDefault();
    this.props.comment({comment: {body: this.state.body, post_id: this.props.postId}}).then(() => this.setState({body: ""}));
    // this.setState({body: ""});
  }

  allowPostDelete() {
    if (this.props.currentUser.username === this.props.user.username) {
      return (  <i onClick={this.handleClick} className="fa fa-trash-o" aria-hidden="true"></i>);
    }
  }

  render () {



      // <p>{this.props.post.commentBody}</p>
    if (this.props.post === undefined) {
      return null;
    } else {

      const comments = this.props.post.commentBody.map(
        comment => {
          if (this.props.currentUser.username === comment[0]) {
            return (
              <p className={comment[2]} key={comment[2]}>{comment[0]}: {comment[1]} <i onClick={this.handleRemoveComment} className="fa fa-times" aria-hidden="true"></i></p>
            );
          } else {
            return (
              <p className={comment[2]} key={comment[2]}>{comment[0]}: {comment[1]}</p>
            );
          }
        }, this);

      return (
        <div className="modal-image-container">
          <div className='modal-left'>
            <img src={this.props.post.image} />
          </div>
          <div className="modal-right">
            <div className="post-header">
              <img src={this.props.user.profile_image} />
              <p>{this.props.user.username}</p>
            {this.allowPostDelete()}
            </div>
            <div className="post-information">
              <p>{this.props.post.caption}</p>
              {comments}
            </div>
            <div className='post-footer'>
            <div className="modal-icons">
              {this.toggleLike()}
              <label htmlFor="comment"><i className="fa fa-commenting-o fa-lg" aria-label="true"></i></label>
              <p>{this.props.post.likesCount} Likes</p>
              <p>{new Date(this.props.post.created_at).toDateString()}</p>
              <form onSubmit={this.handleAddComment}>
              <input type="text" id="comment" placeholder="Add Comment" value={this.state.body} onChange={this.update('body')} />
              </form>
            </div>
          </div>
          </div>
        </div>
    );
    }

  }
}

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.postId;
    return {
      post: state.posts[postId],
      postId: postId,
      currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  getUser: username => dispatch(getUser(username)),
  like: (id) => dispatch(like(id)),
  unlike: (id) => dispatch(unlike(id)),
  comment: (comment_detail) => dispatch(comment(comment_detail)),
  uncomment: (id) => dispatch(uncomment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
