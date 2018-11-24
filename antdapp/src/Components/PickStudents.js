import React, { Component } from 'react';
import { Button } from 'antd';

class PickStudents extends React.Component {

    render() {
        return (
            <Button type="primary" onClick={this.props.chooseStudent}>
                Random Student</Button>
        );
    }

}

export default PickStudents; 