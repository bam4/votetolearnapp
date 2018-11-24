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
                <div>
                <Avatar size={64} icon="user"/>
                <h1>Hello {this.props.student}</h1>
                </div>
                <div>
                    <TextArea rows={4} type="text" value={this.state.answer} onChange={this.recordAnswer} />
                </div>
                <div>
                    <Button type="primary" onClick={this.submitHandler}>Submit</Button>
                </div>
            </div>
        );
    }
};

export default AnswerBox;