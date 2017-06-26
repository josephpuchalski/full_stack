import React from "react";
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchPost} from '../../actions/post_actions';

// const PostShow = (post) => {
//   if (post.post === undefined) {
//     const getPost = post.fetchPost(post.postId);
//     return (
//       <section>
//         <h1>{getPost.title}</h1>
//         <h3>{getPost.body}</h3>
//       </section>
//     );
//   } else {
//     return (
//       <section>
//         <h1>{post.post.title}</h1>
//         <h3>{post.post.body}</h3>
//       </section>
//
// );}
// };


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
        <img src={this.props.post.image} />
        </div>
    );
    }

  }
}
// <button onClick={this.handleClick}>Delete</button>

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