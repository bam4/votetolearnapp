import React, { Component } from 'react';

class PickStudents extends React.Component {

    render() {
        return (
            <button type="submit" className="btn btn-primar" id="nrp" onClick={this.props.chooseStudent}>
                Random Student</button>
        );
    }

}

export default PickStudents; 