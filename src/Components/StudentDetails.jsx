import React, { Component } from 'react';

class StudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      rollNo: '',
      age: '',
      programmingLanguage: 'C',
      isFormFilled: false 
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.validateForm); 
  };

  validateForm = () => {
    const { firstName, lastName, rollNo, age } = this.state;
    const isFormFilled = firstName !== '' && lastName !== '' && rollNo !== '' && age !== '';
    this.setState({ isFormFilled });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student details:', this.state);
  };

  render() {
    const { firstName, lastName, rollNo, age, programmingLanguage, isFormFilled } = this.state;

    return (
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', maxWidth: '400px', margin: '0 auto' }}>
        <h2>Student Details</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              First Name:
              <input type="text" name="firstName" value={firstName} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <input type="text" name="lastName" value={lastName} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              Roll No:
              <input type="text" name="rollNo" value={rollNo} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              Age:
              <input type="text" name="age" value={age} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              C Programming Language:
            </label>
          </div>
          <button type="submit" disabled={!isFormFilled}>Update Student Details</button>
        </form>
      </div>
    );
  }
}

export default StudentDetails;
