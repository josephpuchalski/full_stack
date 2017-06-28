import { connect } from 'react-redux';
import Feed from './feed';
import { fetchPosts } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.user,
    posts: state.session.currentUser.posts
  });
};


const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
