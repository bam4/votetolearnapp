import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InputQuestion from './Components/InputQuestion';
import AnswerBox from './Components/AnswerBox';
import VoteAnswer from './Components/VoteAnswer';
import PickStudent from './Components/PickStudents';
import Validate from './Components/validate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      question: '',
      student_name: ['Oliver', 'Jake', 'Noah', 'James', 'Jack', 'Connor', 'Liam', 'John', 'Harry', 'Callum',
        'Mason', 'Robert', 'Jacob', 'Michael', 'Charlie', 'Kyle', 'William', 'Thomas', 'Joe', 'Ethan', 'David',
        'George', 'Reece', 'Richard'],
      chosenStudents: [],
      answersArray: [],
      currentID: 0,
      status: 'question'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
  }

  addQuestion = (question) => {
    this.setState({ question: question, status: 'pick' })
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
      asw_Arr = asw_Arr.concat({ student: studentList[i], answer: '', vote: 0, studentID: i })
    }
    this.setState({ answersArray: asw_Arr, status: 'answer' })
  }

  addAnswer = (answer) => {
    let student = this.state.chosenStudents[this.state.currentID];
    let newAnswersArray = this.state.answersArray.filter(
      info => info.student !== student);
    newAnswersArray.splice(this.state.currentID, 0, { student: student, answer: answer, vote: 0, studentID: this.state.currentID })
    this.setState({ answersArray: newAnswersArray, studentID: this.state.currentID += 1 })
    this.handleAnswer();
  }

  handleAnswer() {
    if (this.state.currentID >= 4) {
      this.setState({ status: 'vote' })
    }
  }

  handleVote = (studentID) => {
    this.setState({ currentID: studentID });
    let noVote = this.state.answersArray.filter(std => std.studentID !== studentID);
    noVote.splice(studentID, 0, {
      student: this.state.answersArray[studentID].student,
      answer: this.state.answersArray[studentID].answer,
      vote: this.state.answersArray[studentID].vote += 1,
      studentID: studentID
    })
    console.log(noVote)
    return noVote;
  }

  setVote = (studentID) => {
    let noVote = this.handleVote(studentID);
    this.setState({ answersArray: noVote })
  }

  goToValidate = () => {
    this.setState({ status: 'validate' })
  }

  handlePage = () => {
    if (this.state.status === 'question') {
      return (
        <div className="alert alert-info" role="alert">
          <InputQuestion addQuestion={this.addQuestion} />
        </div>
      )
    } else if (this.state.status === 'pick') {
      return (
        <div className="alert alert-info" role="alert">
          <PickStudent chooseStudent={this.handleClick} />
        </div>
      )
    } else if (this.state.status === 'answer') {
      return (
        <div>
          <div>
            <h3>Question: {this.state.question}</h3>
          </div>
          <div className="alert alert-info" role="alert">
            <AnswerBox question={this.state.question}
              addAnswer={this.addAnswer}
              chosenStudents={this.state.chosenStudents}
              student={this.state.chosenStudents[this.state.currentID]} />
          </div>
        </div>
      )
    } else if (this.state.status === 'vote') {
      return (
        <div>
          <div>
            <h3>Question: {this.state.question}</h3>
          </div>
          <div className="alert alert-info" role="alert">
            <VoteAnswer question={this.state.question} answersArray={this.state.answersArray} handleVote={this.setVote}
              goToValidate={this.goToValidate} />
          </div>
        </div>
      )
    } else if (this.state.status === 'validate') {
      return (
        <div>
          <div>
            <h3>Question: {this.state.question}</h3>
          </div>
          <div className="alert alert-info" role="alert">
            <Validate question={this.state.question} answersArray={this.state.answersArray} />
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <this.handlePage />
        </header>
      </div>
    )
  }
}

export default App;
