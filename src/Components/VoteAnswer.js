import React, { Component } from 'react';

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
                    <button type="button" className="btn btn-primary">
                        {instance.answer}
                    </button>
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
                    <ul className="list-group">
                        <this.addVote />
                    </ul>
                </div>
                <br />
                <div>
                    <button type="submit" className="btn btn-primary" onClick={this.changeStatus}>Validate</button>
                </div>
            </div>
        );
    };
}

export default VoteAnswer;