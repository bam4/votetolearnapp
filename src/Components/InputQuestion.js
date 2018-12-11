import React, { Component } from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

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
        this.setState({ question: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addQuestion(this.state.question);
        this.props.chooseStudent();
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Professor, please input the question that you would like the class to answer.</h1>
                    <div>
                        <TextArea rows={5} value={this.state.question} onChange={this.recordQuestion} />
                    </div>
                    <div>
                        <Button type="primary" onClick={this.submitHandler} className="select">
                            Submit and select four random students for me.</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputQuestion;