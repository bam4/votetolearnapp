import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AnswerBox from './Components/AnswerBox';
import VoteAnswer from './Components/VoteAnswer';
import PickStudent from './Components/PickStudents';

class App extends Component {
  constructor() {
    super();
    this.state = {
      student_name: ['Oliver', 'Jake', 'Noah', 'James', 'Jack', 'Connor', 'Liam', 'John', 'Harry', 'Callum',
        'Mason', 'Robert', 'Jacob', 'Michael', 'Charlie', 'Kyle', 'William', 'Thomas', 'Joe', 'Ethan', 'David',
        'George', 'Reece', 'Richard'],
      chosenStudents: [],
      answersArray: [],
      answer: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.answerHandler = this.answerHandler.bind(this)
  }

  getRandomSubarray = (arr, size) => {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
  }

  handleClick = (e) => {
    e.preventDefault();
    let studentList = this.getRandomSubarray(this.state.student_name, 4);
    console.log(studentList);
    this.setState({ chosenStudents: studentList });
    let asw_Arr = [];
    for (let i = 0, len = studentList.length; i < len; i++) {
      asw_Arr = asw_Arr.concat({ student: studentList[i], answer: '', vote: 0 })
    }
    this.setState({ answersArray: asw_Arr })
  }

  answerHandler(answer) {
    this.setState({ answersArray: this.state.answersArray.concat({ student: '', answer: answer, vote: 0 }) })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="alert alert-info" role="alert">
            <PickStudent chooseStudent={this.handleClick} />
            <AnswerBox answer={this.state.answer} answersArray={this.state.answersArray} answerHandler={this.answerHandler} />
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
