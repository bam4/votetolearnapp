import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnswerBox from './Components/AnswerBox';

import VoteAnswer from './Components/VoteAnswer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      answersArray : [ {answer:'' , student:'', vote:0},]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <AnswerBox></AnswerBox>
        </div>
        <div>
          <VoteAnswer answersArray={this.state.answersArray} />
        </div>
        </header>
      </div>
    );
  }
}

export default App;
