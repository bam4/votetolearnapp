import React, { Component } from 'react';

import './InputQuestion.css';

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
            <div className="alert alert-info" role="alert" class="CoolText">
                <div>
                    <h1 >Professor, please input the question that you would like the class to answer.</h1>
                    <div>
                        <input type="text" value={this.state.question} onChange={this.recordQuestion} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary"  onClick={this.submitHandler}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputQuestion;