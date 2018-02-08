import React, { Component } from 'react';

class TextDisplayer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        This is our joke: {this.props.joke}
      </div>
    )
  }
}

export default TextDisplayer;
