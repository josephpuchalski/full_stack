import React from "react";
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchPost} from '../../actions/post_actions';


class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    // this.props.fetchPost(this.props.postId);
  }

  handleClick(e) {
    this.props.closeModal();
    this.props.deletePost(this.props.postId);
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
              <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
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
      postId: postId
    };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
