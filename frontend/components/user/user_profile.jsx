import React from 'react';
import { isEmpty } from 'lodash';
import { Link, Route, Switch } from 'react-router-dom';
import PostIndexContainer from '../post/post_index_container';
import PostFormContainer from '../post/post_form_container';
import ModalContainer from '../modal/modal_container';
import FeedContainer from '../feed/feed_container';
import PostShow from '../post/post_show';
import { values } from 'lodash';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    // this.deleteId = null;
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
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
    this.props.follow({follow: { following_id: this.props.user.id }});
  }

  handleUnfollow() {
    this.props.unfollow(this.props.user.id);
  }

  toggleButton() {
    const isAlreadyFollowing = this.props.currentUser.followings.followingIds.includes(this.props.user.id);
    // const isAlreadyFollowing = values(this.props.user.followers).forEach((follower) => {
    //   //DO NOT HAVE ACCESS TO PROPS
    //   if (follower.username === this.props.currentUser.username) {
    //     this.deleteId = follower.id;
    //     return true;
    //   }
    // });


    if (this.props.currentUser.id === this.props.user.id) {
      return <li><button className="edit-button">Edit Profile</button></li>;
    } else if (isAlreadyFollowing) {
     return <li><button onClick={this.handleUnfollow} className="edit-button">Unfollow</button></li>;
    }
    else {
      return (
        <li><button onClick={this.handleFollow} className="edit-button">Follow</button></li>
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
              {this.toggleButton()}
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

// <Route exact path='/' component={FeedContainer} />
// <img src={window.images.default_photo} />
// <li><button className="edit-button">Edit Profile</button></li>
// <Route exact path="/:username/posts/:id" component={ModalContainer} />
export default UserProfile;
