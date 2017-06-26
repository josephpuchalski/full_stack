import { connect } from 'react-redux';
import PostForm from './post_form_1';
import { createPost } from '../../actions/post_actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.user
  });
};

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
