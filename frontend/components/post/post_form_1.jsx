import React from 'react';
import { Link } from 'react-router-dom';


class PostForm extends React.Component {

  constructor(props) {
    debugger;
    super(props);
    this.state = {caption: "", imageFile: null, imageUrl: null, user_id: props.currentUser.id};
  }

  updateCaption (e) {
    debugger;
    this.setState({caption: e.target.value});
  }

  updateFile (e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

 handleSubmit (e) {
   const formData = new FormData();
   formData.append("post[caption]", this.state.caption);
   formData.append("post[image]", this.state.imageFile);
   formData.append("post[user_id]", this.state.user_id);
   this.props.createPost(formData);
 }

 goBack () {
   this.context.router.push("/");
 }


 render () {

   return(
     <div>
     Post form!
      <br />
     <Link to="/:username">Back to Posts</Link>
     <br />
     <input type="text" onChange={this.updateCaption}/>
      <br />
     <input type="file" onChange={this.updateFile}/>
      <br />
     <button onClick={this.handleSubmit}>Make Post!</button>
      <br />
     <img src={this.state.imageUrl}/>
     </div>);
   }
}


export default PostForm;
