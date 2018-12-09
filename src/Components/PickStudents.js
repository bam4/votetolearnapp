import React, { Component } from 'react';

class PickStudents extends React.Component {

    render() {
        return (
            <div className="alert alert-info" role="alert">
                <button type="submit" className="btn btn-primar" id="nrp" onClick={this.props.chooseStudent}>
                    Random Student</button>
            </div>
        );
    }

}

export default PickStudents; 