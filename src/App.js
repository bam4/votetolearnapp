import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AnswerBox from './Components/AnswerBox';
import VoteAnswer from './Components/VoteAnswer';
import PickStudent from './Components/PickStudents';
import Validate from './Components/validate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      student_name: ['Oliver', 'Jake', 'Noah', 'James', 'Jack', 'Connor', 'Liam', 'John', 'Harry', 'Callum',
        'Mason', 'Robert', 'Jacob', 'Michael', 'Charlie', 'Kyle', 'William', 'Thomas', 'Joe', 'Ethan', 'David',
        'George', 'Reece', 'Richard'],
      chosenStudents: [],
      answersArray: [],
      currentID: 0,
      status: 'pick'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
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
    this.setState({ chosenStudents: studentList });
    let asw_Arr = [];
    for (let i = 0, len = studentList.length; i < len; i++) {
      asw_Arr = asw_Arr.concat({ student: studentList[i], answer: '', vote: 0, studentID: i})
    }
    this.setState({ answersArray: asw_Arr, status: 'answer'})
  }

  addAnswer = (answer) => {
      let student = this.state.chosenStudents[this.state.currentID];
      let newAnswersArray = this.state.answersArray.filter(
        info=>info.student !== student);
      newAnswersArray.splice(this.state.currentID, 0, {student: student, answer: answer, vote: 0, studentID: this.state.currentID} )
      this.setState( {answersArray: newAnswersArray, studentID: this.state.currentID += 1} )
    this.handleAnswer();
  }

  handleAnswer() {
    if (this.state.currentID >= 4) {
      this.setState( {status: 'vote'} )
    }
  }

  handleVote = (studentID) => {
    this.setState( {currentID: studentID} );
    let noVote = this.state.answersArray.filter(std=>std.studentID !== studentID);
    noVote.splice(studentID, 0, {student: this.state.answersArray[studentID].student, 
      answer: this.state.answersArray[studentID].answer, 
      vote: this.state.answersArray[studentID].vote += 1, 
      studentID: studentID})
    console.log(noVote)
    return noVote;
  }

  setVote = (studentID) => {
    let noVote = this.handleVote(studentID);
    this.setState( {answersArray: noVote} )
  }

  goToValidate = () => {
    this.setState( {status: 'validate'} )
  }

  handlePage = () => {
    if (this.state.status === 'pick') {
      return (
        <PickStudent chooseStudent={this.handleClick} />
      )
    } else if (this.state.status === 'answer') {
      return (
        <AnswerBox addAnswer={this.addAnswer} 
          chosenStudents={this.state.chosenStudents} 
          student={this.state.chosenStudents[this.state.currentID]}/>
      )
    } else if (this.state.status === 'vote') {
      return(
      <VoteAnswer answersArray={this.state.answersArray} handleVote={this.setVote} 
      goToValidate={goToValidate} />
      )
    } else if (this.state.status === 'validate') {
      return(
      <Validate answersArray={this.state.answersArray} />
      )
    }
  }

  render() {
      return (
        <div className="App">
        <header className="App-header">
          <div className="alert alert-info" role="alert">
        <this.handlePage />
        </div>
        </header>
      </div>
      )
}
}

export default App;
