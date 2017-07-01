import { connect } from 'react-redux';
import Feed from './feed';
import { fetchPosts } from '../../actions/post_actions';
import { like, unlike } from '../../actions/like_actions';
import { getUser } from '../../actions/user_actions';
import { comment, uncomment } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.user,
    feedPosts: state.posts
  });
};

// posts: state.session.currentUser.posts

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  getUser: username => dispatch(getUser(username)),
  like: (id) => dispatch(like(id)),
  unlike: (id) => dispatch(unlike(id)),
  comment: (comment_detail) => dispatch(comment(comment_detail)),
  uncomment: (id) => dispatch(uncomment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
