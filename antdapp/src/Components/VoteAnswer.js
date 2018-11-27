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
                return <li className="list-group" key={instance.studentID} onClick={() => this.handleClick(instance.studentID)}>
                    <Button block type="button" className="btn btn-primary">
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
            <div>
                <div>
                    <h2>Make your vote!</h2>
                    <ul className="list-group">
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