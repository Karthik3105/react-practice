import React, { Component, useState } from 'react';
import './mystyle.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
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
        fetch('https://python-ecommerce-theta.vercel.app/api/login/', {
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
                    toast.error('Incorrect credentials');
                    throw new Error();
                }
                return response.json();
            })
            .then(data => {
                toast.success('Login successful');
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
                        <div class="login">Login</div>
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
                        <button class="submit" type="submit">Login</button>
                    </div>
                </form>
                <p class="register-user"> Already a user? If not, Please register    <Link to="/register"> Register</Link></p>
                <p class="register-user"> Already a user? If not, Please register    <Link to="/dashboard"> DashBoard</Link></p>
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

export default Login;
