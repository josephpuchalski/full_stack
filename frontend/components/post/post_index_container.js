import { connect } from 'react-redux';
import PostIndex from './post_index';
import {fetchPosts, createPost, deletePost, editPost} from '../../actions/post_actions';
import { selectAllPosts } from '../../reducers/selectors';


const mapStateToProps = (state) => {
  return ({
    posts: selectAllPosts(state),
    currentUser: state.session.currentUser,
    user: state.user
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  createPost: (post) => dispatch(createPost(post)),
  deletePost: (post) => dispatch(deletePost(post)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
