import React, { Component, useState } from 'react';
import './mystyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Register extends Component {
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

        fetch('https://python-ecommerce-theta.vercel.app/api/register/', {
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
                    toast.error('Please enter valid credentials');
                    // alert("Enter valid email")
                    throw new Error();
                }
                return response.json();
            })
            .then(data => {
                toast.success('Registration successful');
                console.log(data)
            })
            .catch(error => console.error('Error:', error));
        console.log(this.state.formData.email)
    }
    render() {
        return (
          
            <div class="register-form">
                 
                <form onSubmit={this.handleSubmit}>
                    <div class="form">
                        <div class="register">Register</div>
                        <div class="name">

                            <input type="text" name="name" value={this.state.formData.name} onChange={this.handleChange} placeholder="Username">
                            </input>
                        </div>
                        <div class="email">

                            <input type="text" name="email" value={this.state.formData.email} onChange={this.handleChange} placeholder="Email">
                            </input>
                        </div>
                        <div class="password">

                            <input type="text" name="password" value={this.state.formData.password} onChange={this.handleChange} placeholder="Password">
                            </input>
                        </div>
                        <button class="submit" type="submit">Register</button>
                    </div>
                </form>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    draggable
                />
            </div>
        );
    }
}

export default Register;
