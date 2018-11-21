import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnswerBox from './Components/AnswerBox';

import VoteAnswer from './Components/VoteAnswer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      answersArray : []
    }
    this.answerHandler = this.answerHandler.bind(this)
  }

  answerHandler = (data) => {
    this.setState( {answersArray: this.state.answersArray.concat(
      {answer: data, student:'', vote:0}
    )} )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div class="alert alert-info" role="alert">
          <AnswerBox answersArray={this.state.answersArray} answerHandler={this.answerHandler}/>
        </div>
        <div>
          <h1 >Click to vote!</h1>
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
