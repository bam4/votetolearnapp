import React, { Component } from 'react';

class VoteAnswer extends React.Component {
    constructor() {
        super();
        this.addVote = this.addVote.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(idx) {
        this.props.answersArray[idx].vote += 1;
        alert("Thanks for voting!", this.props.answersArray[idx].answer + this.props.answersArray[idx].vote);
        this.forceUpdate();
    }

    addVote = () => {
        let votes = this.props.answersArray.map(
            (i,answer) => {
                return(
                    <li key={i} onClick={() => this.handleClick(i)}>
                    <button type="button" class="btn btn-primary"> 
                        {answer.answer} <span className="badge badge-light">{this.props.answersArray[i].vote} </span>
                    </button>

                    {/* <button type="submit" className="btn btn-primar">

                        <span >{answer.answer}</span>
                        <span>{answer.i}</span>
                    </button> */}
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