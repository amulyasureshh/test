import React, { useState } from 'react';

function FormFunctionalComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    married: false,
    country: '',
    city: '',
    street: '',
    pincode: ''
  });

  const countries = [
    'USA',
    'Canada',
    'UK',
    'Australia',
    'India',
    'Germany',
    'France'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      married: false,
      country: '',
      city: '',
      street: '',
      pincode: ''
    });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Form Functional Component</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
        </label>
        <br />
        <label htmlFor="male">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label htmlFor="female">
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <br />
        <br />
        <label>
          Married:
          <input
            type="checkbox"
            name="married"
            checked={formData.married}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="country">
          Country:
          <select id="country" name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
        </label>
        <br />
        <label htmlFor="city">
          City:
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="street">
          Street:
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="pincode">
          Pincode:
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormFunctionalComponent;
