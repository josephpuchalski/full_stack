var React = require("react");
var Link = require("react-router-dom").Link;

var PostStore = require("../../store/store.js");
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
    PostApi.createPost(formData, this.goBack);
  },

  goBack: function () {
    this.context.router.push("/");
  },

  render: function () {

    return(
      <div>
        Post form!

        <Link to="/">Back to Posts</Link>
        <input type="text" onChange={this.updateBody}/>
        <input type="file" onChange={this.updateFile}/>
        <button onClick={this.handleSubmit}>Make Post!</button>
        <img src={this.state.imageUrl}/>
      </div>);
  }
});

module.exports = PostForm;
