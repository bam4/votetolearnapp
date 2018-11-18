import React, { Component } from 'react';

class VoteAnswer extends React.Component {
    constructor() {
        super();
    }

    addVote = () => {
        this.props.answers.filter()
    }

    render() {
        return (
            <ul class="list-group">
                {this.props.answers.map(
                    function (answer) {
                        return <li>
                            <button type="submit" class="btn btn-primar">{answer.answer}</button>
                        </li>
                    })}
            </ul>
        )
    }
};

export default VoteAnswer;