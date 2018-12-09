import React, { Component } from 'react';

class InputQuestion extends React.Component {
    constructor() {
        super();
        this.state = {
            question: ''
        }
        this.recordQuestion = this.recordQuestion.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    recordQuestion = (e) => {
        e.preventDefault();
        this.setState({ question: e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addQuestion(this.state.question);
    }

    render() {
        return (
            <div className="alert alert-info" role="alert">
                <div>
                    <h1>Input the Question</h1>
                    <div>
                        <input type="text" value={this.state.question} onChange={this.recordQuestion} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary" onClick={this.submitHandler}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputQuestion;