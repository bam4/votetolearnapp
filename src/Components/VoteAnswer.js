import React, { Component } from 'react';

class VoteAnswer extends React.Component {
    constructor() {
        super();
        this.addVote = this.addVote.bind(this);
    }

    addVote = (e) => {
        e.preventDefault();
        this.props.answersArray.vote += 1;
    }

    render() {
        return (
            <ul className="list-group">
                {this.props.answersArray.map(
                    function (answer) {
                        return <li>
                            <button type="submit" className="btn btn-primar" onClick={this.addVote}>
                            <span>{answer.answer}</span>
                            <span>{answer.vote}</span></button>
                        </li>
                    })}
            </ul>
        )
    }
};

export default VoteAnswer;