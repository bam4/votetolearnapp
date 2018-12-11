import React, { Component } from 'react';
import { Button } from 'antd';

class PickStudents extends React.Component {

    render() {
        return (
            <div className="alert alert-info" role="alert">
                <Button type="primary" onClick={this.props.chooseStudent} className="select">
                Select a random student for me.</Button>
            </div>
           
           
        );
    }

}

export default PickStudents; 