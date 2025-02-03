import React, { useState } from 'react';

const StudentDetails1 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    rollNo: '',
    age: '',
    programmingLanguage: 'C'
  });
  
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    const formFilled = Object.values({ ...formData, [name]: value }).every(val => val !== '');
    setIsFormFilled(formFilled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student details:', formData);
  };

  const { firstName, lastName, rollNo, age } = formData;

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Student Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input type="text" name="firstName" value={firstName} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" name="lastName" value={lastName} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Roll No:
            <input type="text" name="rollNo" value={rollNo} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input type="text" name="age" value={age} onChange={handleChange} />
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
};

export default StudentDetails1;
