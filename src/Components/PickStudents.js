import React, { Component } from 'react';

class PickStudents extends React.Component {
    constructor() {
        super();
        this.state = {
            student_name: ['Oliver', 'Jake', 'Noah', 'James', 'Jack', 'Connor', 'Liam', 'John', 'Harry', 'Callum',
                'Mason', 'Robert', 'Jacob', 'Michael', 'Charlie', 'Kyle', 'William', 'Thomas', 'Joe', 'Ethan', 'David',
                'George', 'Reece', 'Richard'], chosen_student: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    Pop_stu = () => {
        if (this.state.student_name.length == 0) {
            alert("All student have been called once before!")
        } else {
            let studentList = []
            for (let i = 0; i < 4; i++) {
                let idx = Math.floor(Math.random() * this.state.student_name.length);
                let students_cpy = this.state.student_name.slice();
                let stud = students_cpy.splice(idx, 1);
                studentList = studentList.concat(stud);
            }
            return studentList;
        }
    }

    handleClick = (e) => {
        let studentList = this.Pop_stu();
        this.setState({ chosen_student: studentList });
        this.props.chooseStudent(studentList);
        alert(studentList)
        this.props.setStudentsArray();
    }

    render() {
        return (
            <button type="submit" class="btn btn-primar" id="nrp" onClick={this.handleClick}>
                Random Student</button>
        );
    }

}

export default PickStudents; 