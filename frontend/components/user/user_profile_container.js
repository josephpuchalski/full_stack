import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { getUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
