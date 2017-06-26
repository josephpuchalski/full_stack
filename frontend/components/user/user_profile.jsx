import React from 'react';
import { isEmpty } from 'lodash';
import { Link, Route } from 'react-router-dom';
import PostIndexContainer from '../post/post_index_container';
import PostFormContainer from '../post/post_form_container';
class UserProfile extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount () {
    this.props.getUser(this.props.match.url);
  }
  // <img src={window.images.default_photo} />

  render () {
    if (isEmpty(this.props.user)) {
      return null;
    } else {
      return (
        <div className="header-holder">
          <div className="render-fix user-profile-header">
            <img src={this.props.user.profile_image} />
            <section className="user-detail-holder">
            <ul>
              <li><p className="header-username">{this.props.user.username}</p></li>
              <li><Link className="edit-button" to="accounts/edit"><button>Edit Button</button></Link></li>
            </ul>
            <ul className="post-follower-following">
              <li>{this.props.user.posts.length} posts</li>&nbsp;&nbsp;
              <li>0 followers</li>&nbsp;&nbsp;
              <li>0 following</li>&nbsp;&nbsp;
            </ul>
            <ul>
              <li><p className="header-name">{this.props.user.name}</p></li>
              <li><p className="header-bio">{this.props.user.bio}</p></li>
            </ul>
            </section>
          </div>
          <Route exact path='/:username' component={PostIndexContainer} />
          <Route exact path='/:username/create_post' component={PostFormContainer} />
        </div>
      );
    }
  }

}

export default UserProfile;
