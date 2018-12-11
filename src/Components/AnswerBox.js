import React, { Component } from 'react';
import { Avatar, Input, Button } from 'antd';

const { TextArea } = Input;

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
        this.setState({ answer: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addAnswer(this.state.answer);
        alert("Your answer has been submitted.")
        this.setState({ answer: '' })
    }

    render() {
        return (
            <div>
                <div>
                    <Avatar size={64} icon="user" />
                    <p><i> {this.props.student}, what is your answer to this question?</i></p>
                </div>
                <div>
                    <TextArea rows={5} type="text" value={this.state.answer} onChange={this.recordAnswer} className="answerbox"/>
                </div>
                <div>
                    <Button type="primary" data-toggle="tooltip" data-placement="top" className="select" title="Your answer will be seen by the rest of the class." onClick={this.submitHandler}>Submit</Button>
                </div>
            </div>
        );
    }
};

export default AnswerBox;