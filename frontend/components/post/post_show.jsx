import React from "react";
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchPost} from '../../actions/post_actions';
import { getUser } from '../../actions/user_actions';


class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }

  componentDidMount () {
    this.props.fetchPost(this.props.postId);
  }

  handleClick(e) {
    this.props.closeModal();
    this.props.deletePost(this.props.postId).then( () => this.props.getUser(this.props.user.username));
  }

  handleLike() {
    console.log("like");
  }

  handleUnlike() {
    console.log("unlike");
  }

  toggleLike() {
    const isAlreadyLiked = this.props.currentUser.likes.likesIds.includes(this.props.post.id);

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

  render () {
    if (this.props.post === undefined) {
      return null;
    } else {
      return (
        <div className="modal-image-container">
          <div className='modal-left'>
            <img src={this.props.post.image} />
          </div>
          <div className="modal-right">
            <div className="post-header">
              <img src={this.props.user.profile_image} />
              <p>{this.props.user.username}</p>
              <i onClick={this.handleClick} className="fa fa-trash-o" aria-hidden="true"></i>
            </div>
            <div className="post-information">
              <p>{this.props.post.caption}</p>
            </div>
            <div className='post-footer'>
            <div className="modal-icons">
              {this.toggleLike()}
              <label htmlFor="comment"><i className="fa fa-commenting-o fa-lg" aria-label="true"></i></label>
              <p>0 Likes</p>
              <p>{new Date(this.props.post.created_at).toDateString()}</p>
              <form>
              <textarea id="comment" placeholder="Add Comment"></textarea>
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
  likePost: (id) => dispatch(likePost(id)),
  unlikePost: (id) => dispatch(unlikePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
