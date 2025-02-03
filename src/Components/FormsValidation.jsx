import React, { Component } from 'react';
import './Demo.css';

class FormsValidation extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {}, // storing form details
            errors: {} // storing the validation error messages
        };
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    }

    // Core part of form validation
    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // Name validation
        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        } else if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
        }

        // Email validation
        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }


        // Password validation
        // if (!fields["password"]) {
        //     formIsValid = false;
        //     errors["password"] = "*Please enter your password.";
        // } else if (!fields["password"].match(/^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%&]).$/)) {
        //     formIsValid = false;
        //     errors["password"] = "*Please enter a secure and strong password.";
        // }
        // Password validation
if (!fields["password"]) {
    formIsValid = false;
    errors["password"] = "*Please enter your password.";
} else if (!fields["password"].match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/)) {
    formIsValid = false;
    errors["password"] = "*Please enter a secure and strong password.";
}


        // DOB validation
        if (!fields["dob"]) {
            formIsValid = false;
            errors["dob"] = "*Please enter your DOB.";
        }

        // Address validation
        if (!fields["address"]) {
            formIsValid = false;
            errors["address"] = "*Please enter your address.";
        }

        // Category validation
        if (!fields["category"]) {
            formIsValid = false;
            errors["category"] = "*Please select a category.";
        }
        if (!fields["gender"]) {
            formIsValid = false;
            errors["gender"] = "*Please select a gender.";
        }

        this.setState({
            errors: errors
        });
        return formIsValid; // after completing all validation, form is true
    }

    // Store user details in state (i.e: fields: {})
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    }

    // Validate user details by calling validateForm() function and clear the form when valid
    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.state.fields, null, 4));
    
            // Display form data on success
            alert("Form submitted");
    
            // Clearing form values
            let fields = {
                username: "",
                emailid: "",
                mobileno: "",
                password: "",
                dob: "",
                address: "",
                category: "",
                gender: ""
            };
    
            this.setState({ fields });
        }
    }
    


    render() {
        return (
            <div>
                <div id="register">
                    <h3>Registration page</h3>
                    <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>

                        <label>Name</label>
                        <input type="text" name="username" value={this.state.fields.username || ""} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.username}</div>

                        <label>Email ID:</label>
                        <input type="email" name="emailid" value={this.state.fields.emailid || ""} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.emailid}</div>

                        <label>Address</label>
                        <input type="text" name="address" value={this.state.fields.address || ""} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.address}</div>

                        <label>Password</label>
                        <input type="password" name="password" value={this.state.fields.password || ""} onChange={this.handleChange} />
                        
                        <div className="errorMsg">{this.state.errors.password}</div>


                        <label>DOB:</label>
                        <input type="date" name="dob" value={this.state.fields.dob || ""} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.dob}</div>

                        <label>Select Country:</label>
                        <select name="category" value={this.state.fields.category || ""} onChange={this.handleChange}>
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="Russia">Russia</option>
                            <option value="USA">USA</option>
                            <option value="Japan">Japan</option>
                            <option value="China">China</option>
                        </select>
                        <div className="errorMsg">{this.state.errors.category}</div>

                        <br />
                        <label>Gender</label>
                        <label>
                            <input type="radio" name="gender" value="male" checked={this.state.fields.gender === "male"} onChange={this.handleChange} />
                            Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="female" checked={this.state.fields.gender === "female"} onChange={this.handleChange} />
                            Female
                        </label>
                        <label>
                            <input type="radio" name="gender" value="other" checked={this.state.fields.gender === "other"} onChange={this.handleChange} />
                            Other
                        </label>
                        <div className="errorMsg">{this.state.errors.gender}</div>
                        <br /><br />

                        <input type="submit" className="button" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default FormsValidation;
