import React from 'react';
import { isEmpty } from 'lodash';
import { Link, Route } from 'react-router-dom';
import PostIndexContainer from '../post/post_index_container';
import PostFormContainer from '../post/post_form_container';
import ModalContainer from '../modal/modal_container';
import PostShow from '../post/post_show';
class UserProfile extends React.Component {

  constructor(props) {
    super(props);

    this.handleFollow = this.handleFollow.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.match.url);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.url !== nextProps.match.url) {
      this.props.getUser(nextProps.match.url);
    }
  }

  handleFollow() {
    console.log("hi");
  }

  toggleButton() {

    if (this.props.currentUser.id === this.props.user.id) {
      return <li><button className="edit-button">Edit Profile</button></li>;
    } else {
      return (
        <li><button onClick={() => console.log("hi")} className="edit-button">Follow</button></li>
      );
    }
  }

  handleUpload() {

  }

  // {this.toggleButton()}
  render() {
    if (isEmpty(this.props.user)) {
      return null;
    } else {
      return (
        <section className="header-holder">
          <div className="render-fix user-profile-header">
            <img onClick={() => console.log("hi")} src={this.props.user.profile_image} />
            <section className="user-detail-holder">
            <ul>
              <li><p className="header-username">{this.props.user.username}</p></li>
              <li><button onClick={() => console.log("hi")} className="edit-button">Follow</button></li>
            </ul>
            <ul className="post-follower-following">
              <li>{this.props.user.posts.length} posts</li>&nbsp;&nbsp;
              <li>{this.props.user.followerCount} followers</li>&nbsp;&nbsp;
              <li>{this.props.user.followingCount} following</li>&nbsp;&nbsp;
            </ul>
            <ul>
              <li className="header-name">{this.props.user.name}</li>
              <li className="header-bio">{this.props.user.bio}</li>
            </ul>
            </section>
          </div>
          <Route exact path='/:username' component={PostIndexContainer} />
          <Route exact path='/:username/create_post' component={PostFormContainer} />
          <ModalContainer />
        </section>
      );
    }
  }

}

// <img src={window.images.default_photo} />
// <li><button className="edit-button">Edit Profile</button></li>
// <Route exact path="/:username/posts/:id" component={ModalContainer} />
export default UserProfile;
