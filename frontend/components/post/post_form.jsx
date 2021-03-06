import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {caption: "", imageFile: null, imageUrl: null, user_id: "", redirect: false};
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateFile (e) {
    let file = e.currentTarget.files[0];

    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }

  }

 handleSubmit (e) {
  //  this.setState({redirect: true});
  //  formData.append("post[user_id]", this.props.currentUser.id);
   const formData = new FormData();
   formData.append("post[caption]", this.state.caption);
   formData.append("post[image]", this.state.imageFile);
   this.props.createPost(formData).then(() => {this.props.history.push(`/${this.props.currentUser.username}`);});
 }

 goBack () {
   this.context.router.push("/");
 }

 //  if (this.state.redirect) {
 //    return <Redirect to={`/${this.props.currentUser.username}`} />;
 //  } else {

 render () {
   return(
     <div className="post-form">
      <h1>Create a New Post</h1>
      <br />
     <Link to="/:username">Back to Posts</Link>
     <br />
     <textarea placeholder="Caption" onChange={this.update('caption')}></textarea>
     <br />
     <input placeholder="Upload Photo" type="file" onChange={this.updateFile}/>
     <br />
     <button className="create-post-button" onClick={this.handleSubmit}>Create Post</button>
     <br />
     <img className="image-preview" src={this.state.imageUrl}/>
   </div>);
   }

}


export default withRouter(PostForm);
