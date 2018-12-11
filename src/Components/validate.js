import React, { Component } from 'react';

class Validate extends React.Component {

    render() {
        return (
            this.props.answersArray.map(
                    (instance) => {
                        return <li className="list-group-item d-flex justify-content-between align-items-center" id="writer">
                            <span>{instance.answer}</span>
                            <span>{instance.vote} Votes</span>
                        </li>
                    })
        )
    }
}

export default Validate;