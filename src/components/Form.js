import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      superlative: '',
      photo: ''
    }
  }
  
  handleValueChange = event => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handlePhotoChange = event => {
      this.setState({
        photo: URL.createObjectURL(event)
      })
  }

  submitNewStudent = event => {
    event.preventDefault();

    const newStudent = {...this.state, id: Date.now()}
    this.props.addNewStudent(newStudent)
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({ name: '', quote: '', superlative: '', photo: ''})
  }

  render(){
    return(
      <form>
        <h3>Student Name:</h3>
        <input 
          type= "text"
          placeholder= "Student Name"
          value={this.state.name}
          name="name"
          onChange={event => {this.handleValueChange(event)}}
        />
        <h3>Student Quote:</h3>
        <input 
          type= "text"
          placeholder= "Quote"
          value={this.state.quote}
          name="quote"
          onChange={event => {this.handleValueChange(event)}}
        />
        <h3>Student Superlative:</h3>
        <input 
          type= "text"
          placeholder= "Superlative"
          value={this.state.superlative}
          name="superlative"
          onChange={event => {this.handleValueChange(event)}}
        />
        <h3>Add a photo:</h3>
        <input 
          type="file"
          name="photo"
          onChange={event => {this.handlePhotoChange(event.target.files[0])}}
        />
        <button onClick={event => this.submitNewStudent(event)}>Submit</button>
          </form>
    )
  }
}

export default Form;