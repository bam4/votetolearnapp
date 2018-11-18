import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnswerBox from './Components/AnswerBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>hey</h1>
        <AnswerBox></AnswerBox>
        </header>
      </div>
    );
  }
}

export default App;
