import React, { Component } from 'react';

class Validate extends React.Component {

    render() {
        return (
            
            this.props.answersArray.map(
                    (instance) => {
                        return <li className="list-group-item d-flex justify-content-between align-items-center" id="writer">
                            
                            <span class="h-50 d-inline-block"class="border border-primary" class="shadow-lg p-3 mb-5 bg-white rounded">{instance.answer}</span>
                            <span class="h-50 d-inline-block"class="border border-secondary" class="shadow-lg p-3 mb-5 bg-white rounded"><b><i>{instance.vote}</i></b></span>
                        </li>
                    })
        )
    }
}

export default Validate;