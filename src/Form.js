import React, { Component, useState } from 'react';
import './mystyle.css'
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                name: '',
                email: '',
                password: ''
            }
        };
    }

    handleChange = (e) => {
        this.setState({
            formData: { ...this.state.formData, [e.target.name]: e.target.value }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        

            fetch('https://python-real-121.vercel.app/api/register/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: this.state.formData.name,
        email: this.state.formData.email,
        password: this.state.formData.password,
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error();
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
        console.log(this.state.formData.email)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="form">
                    <div>Register</div>
                    <div class="name">

                        <input type="text" name="name" value={this.state.formData.name} onChange={this.handleChange} placeholder="Enter your name">
                        </input>
                    </div>
                    <div class="email">

                        <input type="text" name="email" value={this.state.formData.email} onChange={this.handleChange} placeholder="Enter your email">
                        </input>
                    </div>
                    <div class="password">

                        <input type="text" name="password" value={this.state.formData.password} onChange={this.handleChange} placeholder="Enter your password">
                        </input>
                    </div>
                    <button type="submit">submit</button>
                </div>
            </form>
        );
    }
}

export default Form;