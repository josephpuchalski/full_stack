import { connect } from 'react-redux';
import PostIndex from './post_index';
import {fetchPosts, createPost, deletePost, editPost} from '../../actions/post_actions';
import { selectAllPosts, selectAllPostsFromUser } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
    return ({
    posts: selectAllPostsFromUser(state.user.posts),
    currentUser: state.session.currentUser,
    user: state.user
  });

};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  createPost: (post) => dispatch(createPost(post)),
  deletePost: (post) => dispatch(deletePost(post)),
  openModal: (postId) => dispatch(openModal(postId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
