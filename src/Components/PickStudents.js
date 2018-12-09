import React, { Component } from 'react';

class PickStudents extends React.Component {

    render() {
        return (
            <div className="alert alert-info" role="alert">
                <button type="submit" className="btn btn-success" id="nrp" data-toggle="tooltip" data-placement="top" title="I will pick four students for you." onClick={this.props.chooseStudent}>
                    Select a random student for me.</button>
            </div>
           
            
        );
    }

}

export default PickStudents; 