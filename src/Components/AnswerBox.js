import React, { Component } from 'react';

class AnswerBox extends React.Component {
    constructor() {
        super();
        this.state = {
            answer: ''
        }
        this.recordAnswer = this.recordAnswer.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    recordAnswer = (e) => {
        e.preventDefault();
        this.setState({ answer: e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addAnswer(this.state.answer);
        alert("Your answer has been submitted.")
        this.setState({ answer: ''})
    }

    render() {
        return (
            <div>
                <h1>Hello {this.props.student}</h1>
                <div>
                    <input type="text" value={this.state.answer} onChange={this.recordAnswer} />
                </div>
                <div>
                    <button type="submit" onClick={this.submitHandler}>Submit</button>
                </div>
            </div>
        );
    }
};

export default AnswerBox;