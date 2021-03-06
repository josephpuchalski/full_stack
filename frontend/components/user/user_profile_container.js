import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { getUser } from '../../actions/user_actions';
import { follow, unfollow} from '../../actions/follow_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.user,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: username => dispatch(getUser(username)),
    follow: id => dispatch(follow(id)),
    unfollow: id => dispatch(unfollow(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
