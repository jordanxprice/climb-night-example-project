import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

//Components
import TextDisplayer from './Components/TextDisplayer.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      joke: '',
      jokeName: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      jokeName: e.target.value
    })
  }
  submitGameRequest = () => {
    axios.get(`http://localhost:3000/jokes`).then((response) => {
      this.setState({
        joke: response.data.value.joke
      })

    })
  }

  submitComment = () => {
    var data = {
      joke: this.state.joke
    }

    axios.post('http://localhost:3000/jokes/submit', data).then((response) => {
      console.log('this is the response', response)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Our project</h1>
        </header>
        <p className="App-intro">
          This is our cool app
        </p>
        <input onChange={this.handleChange}/>
        <button onClick={this.submitGameRequest}>Get Joke!</button>
        <button onClick={this.submitComment}>Post Comment!</button>
        <TextDisplayer joke={this.state.joke}></TextDisplayer>
      </div>
    );
  }
}

export default App;
