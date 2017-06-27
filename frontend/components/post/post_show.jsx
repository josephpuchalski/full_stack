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
            <p>{this.props.user.username}</p>
            <p>{this.props.post.caption}</p>
            <button onClick={this.handleClick}>Delete</button>
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
