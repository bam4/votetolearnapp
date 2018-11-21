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
      answersArray: [], chosenStudents: []
    }
    this.answerHandler = this.answerHandler.bind(this)
  }

  chooseStudent = (students) => {
    this.setState( {chooseStudent: students} )
    let asw_Arr = []
    for (let i=0, len = students.length; i<len; i++) {
        asw_Arr = asw_Arr.concat({ student: students[i], answer: '', vote: 0 })
    }
    return asw_Arr
  }

  setStudentsArray = () => {
    let asw_Arr = this.chooseStudent();
    this.setState( {answersArray: asw_Arr} )
    alert(asw_Arr)
  }

  answerHandler = (answer, idx) => {
    this.setState({ answersArray: this.state.answersArray[idx].answer = answer })
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
