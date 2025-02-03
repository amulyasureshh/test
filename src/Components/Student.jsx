import React from 'react';

const Address = ({ street, city, state, zipcode }) => {
  return (
    <div>
      <h3>Address</h3>
      <p>Street: {street}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Zipcode: {zipcode}</p>
    </div>
  );
};

const Course = ({ name, instructor, duration }) => {
  return (
    <div>
      <h3>Course</h3>
      <p>Name: {name}</p>
      <p>Instructor: {instructor}</p>
      <p>Duration: {duration}</p>
    </div>
  );
};

const PhoneNumber = ({ type, number }) => {
  return (
    <div>
      <h3>Phone Number</h3>
      <p>Type: {type}</p>
      <p>Number: {number}</p>
    </div>
  );
};

const Student = () => {
  const studentAddress = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipcode: '12345'
  };

  const courses = [
    { name: 'Mathematics', instructor: 'Professor X', duration: '3 months' },
    { name: 'Science', instructor: 'Professor Y', duration: '4 months' }
  ];

  const phoneNumbers = [
    { type: 'Home', number: '123-456-7890' },
    { type: 'Mobile', number: '987-654-3210' }
  ];

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Student Information</h2>
      <div style={{ marginBottom: '20px' }}>
        <Address street={studentAddress.street} city={studentAddress.city} state={studentAddress.state} zipcode={studentAddress.zipcode} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>Courses</h3>
        {courses.map((course, index) => (
          <Course key={index} name={course.name} instructor={course.instructor} duration={course.duration} />
        ))}
      </div>
      <div>
        <h3>Phone Numbers</h3>
        {phoneNumbers.map((phoneNumber, index) => (
          <PhoneNumber key={index} type={phoneNumber.type} number={phoneNumber.number} />
        ))}
      </div>
    </div>
  );
};

export default Student;
