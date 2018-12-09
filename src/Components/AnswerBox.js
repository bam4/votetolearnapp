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
                <p><i> {this.props.student}, what is your answer to this question?</i></p>
                <div>
                    <input type="text" value={this.state.answer} onChange={this.recordAnswer} />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Your answer will be seen by the rest of the class." onClick={this.submitHandler}>Submit</button>
                </div>
            </div>
        );
    }
};

export default AnswerBox;