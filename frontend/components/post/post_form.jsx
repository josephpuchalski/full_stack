import React from 'react';
import { Redirect } from 'react-router-dom';
class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { caption: '', image: '', user_id: this.props.currentUser.id};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const val = e.currentTarget.value;
    const name = e.currentTarget.name;
    this.setState({[name]: val});
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    this.props.createPost(this.state);
    this.setState({ caption: '', image: '', user_id: '' });
  }

  render() {
    if (this.state.user_id === '') {

      return <Redirect to={`/${this.props.currentUser.username}`} />;
    } else {
    return (
      <form onSubmit={this.handleSubmit}>
      <h1> Create a new Post </h1>
          <input placeholder='Caption' name='caption' onChange={this.handleChange} value={this.state.title} />
        <br />
        <br />
          <input placeholder= 'Upload Image' name='image' onChange={this.handleChange} value={this.state.body} />
        <br />
        <br />
        <button>Submit</button>
      </form>
    );}
  }
}

export default PostForm;
