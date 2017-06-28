import React from 'react';

class Feed extends React.Component {
  constructor(props) {

    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
    forceUpdate()
  }


  render() {
    debugger;

    return (
      <div className='render-fix'>
      <h1>hello</h1>
      </div>
  );}
}

export default Feed;
