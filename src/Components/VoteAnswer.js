import React, { Component } from 'react';

class VoteAnswer extends React.Component {
    constructor() {
        super();
        this.addVote = this.addVote.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(idx) {
        this.props.answersArray[idx].vote += 1;
        // alert(this.props.answersArray[idx].answer + this.props.answersArray[idx].vote);
    }

    addVote = () => {
        let votes = this.props.answersArray.map(
            (answer,i) => {
                return(
                    <li key={i} onClick={() => this.handleClick(i)}>
                    <button type="submit" className="btn btn-primar">
                        <span>{answer.answer}</span>
                    </button>
                </li>
                )
            })
            return votes;
        }


    render() {
        return (
            <ul className="list-group">
                {this.addVote()}
            </ul>
        )
    };

}

export default VoteAnswer;