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
  
  handleValueChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handlePhotoChange = (event) => {
      this.setState({
        photo: URL.createObjectURL(event)
      })
  }

  submitNewStudent = (event) => {
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
      <div className='form'>
      <form>
        <div className='form-fields'>
          <h3 className='form-key'>Student Name: </h3>
          <input 
            type= "text"
            placeholder= "Student Name"
            value={this.state.name}
            name="name"
            onChange={event => {this.handleValueChange(event)}}
          />
        </div>
        <div className='form-fields'>
          <h3 className='form-key'>Student Quote: </h3>
          <input 
            type= "text"
            placeholder= "Quote"
            value={this.state.quote}
            name="quote"
            onChange={event => {this.handleValueChange(event)}}
          />
        </div>
        <div className='form-fields'>
          <h3 className='form-key'>Student Superlative: </h3>
          <input 
            type= "text"
            placeholder= "Superlative"
            value={this.state.superlative}
            name="superlative"
            onChange={event => {this.handleValueChange(event)}}
          />
        </div>
        <div className='form-fields'>
          <h3 className='form-key'>Add a photo: </h3>
          <input 
            className="photo-input"
            type="file"
            name="photo"
            onChange={event => {this.handlePhotoChange(event.target.files[0])}}
          />
        </div>
        <br/>
        <div className='form-fields'>
          <button onClick={event => this.submitNewStudent(event)}>Submit</button>
        </div>
      </form>
      </div>
    )
  }
}

export default Form;