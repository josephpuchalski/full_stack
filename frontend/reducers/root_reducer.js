import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import PostReducer from './post_reducer';
import ModalReducer from './modal_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  posts: PostReducer,
  modal: ModalReducer,
});

export default rootReducer;
