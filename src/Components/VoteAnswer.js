import React, { Component } from 'react';
import { Button } from 'antd';

class VoteAnswer extends React.Component {
    constructor() {
        super();
        this.addVote = this.addVote.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    handleClick(studentID) {
        this.props.handleVote(studentID);
        alert("Thanks for voting!");
    }

    addVote = () => {
        const votes = this.props.answersArray.map(
            (instance) => {
                return <li key={instance.studentID} onClick={() => this.handleClick(instance.studentID)}>
                    <Button block type="button" class="list-group-item list-group-item-action" id="listt">
                        {instance.answer}
                    </Button>
                </li>
            })
        return votes;
    }

    changeStatus = (e) => {
        e.preventDefault();
        this.props.goToValidate();
    }

    render() {
        return (
            <div className="alert alert-info" role="alert">
                <div>
                    <h3 className = "blackText">Please choose the item you would like to vote on:</h3>
                    <ul>
                        <this.addVote />
                    </ul>
                </div>
                <br />
                <div>
                    <Button type="primary" onClick={this.changeStatus}>Validate</Button>
                </div>
            </div>
        );
    };
}

export default VoteAnswer;