var React = require("react");
var Link = require("react-router-dom").Link;
var Redirect = require("react-router-dom").Redirect;
// var PostStore = require("../../store/store.js");
var PostApi = require('../../util/post_util.js');

var PostForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return({
      caption: "",
      imageFile: null,
      imageUrl: null,
      user_id: '',
    });
  },

  updateBody: function (e) {
    this.setState({
      caption: e.target.value
    });
  },

  updateFile: function (e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  },

  handleSubmit: function (e) {
    var formData = new FormData();
    formData.append("post[caption]", this.state.caption);
    formData.append("post[image]", this.state.imageFile);
    formData.append("post[user_id]", this.props.currentUser.id);
    PostApi.createPost(formData);
    return <Redirect to='/' />;

  },

  goBack: function () {
    this.context.router.push("/");
  },

  render: function () {
    return(
      <div className="post-form">
        <h1>Create a New Post</h1>
        <br />
        <input placeholder="Caption" type="text" onChange={this.updateBody}/>
        <br />
        <input placeholder="Upload Photo" type="file" onChange={this.updateFile}/>
        <br />
        <button className="create-post-button" onClick={this.handleSubmit}>Create Post</button>
        <br />
        <img className="image-preview" src={this.state.imageUrl}/>
      </div>
    );
  }
});

module.exports = PostForm;
