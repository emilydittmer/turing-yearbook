import React, { Component } from 'react';
import Cohort from './Cohort';
import Students from './Students';
import Form from './Form';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students,
    }
  }

  addNewStudent = newStudent => {
    this.setState({students: [...this.state.students, newStudent]})
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Turing Yearbook</h1>
      </header>
      <h2 className="section-header">Add a New Student</h2>
      <Form 
        addNewStudent={this.addNewStudent}/>
      <h2 className="section-header">Staff</h2>
        <Cohort 
          staff={this.state.staff}
        />
      <h2 className="section-header">Students</h2>
        <Students 
          students = {this.state.students}
        />
      </div>
    );
  }
}

export default App;
