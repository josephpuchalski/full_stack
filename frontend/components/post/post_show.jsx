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
    this.props.fetchPost(this.props.postId);
  }

  handleClick(e) {
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
              <button onClick={this.handleClick}>Delete</button>
            </div>
            <div className="post-information">
            {this.props.post.caption}
            <p>
            dfadfdsaf
            dsafsadfasd
            fsadfasdf
            sdafsadfdsa
            fadsf
            asdf
            asdfads
            f
            a
            ds
            f
            ads
            f
            </p>
            </div>
            <div className="modal-icons">
              <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
              <i className="fa fa-commenting-o fa-lg" aria-hidden="true"></i>
            </div>
            <form>
            <textarea placeholder="Add Comment"></textarea>
            </form>
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
