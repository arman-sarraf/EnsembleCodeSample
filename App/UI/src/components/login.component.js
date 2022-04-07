import React, { Component, useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
export default class Login extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}),
            REST_API_LOGIN: "http://localhost:8080//login",
            error: "",
        };
    }

    handleSubmit = e => {

        e.preventDefault();

        if (!this.name) {
            this.state.error = "User Id cannot be empty";
            console.log(this.state.error);
            swal(this.state.error, "", "error");
        }
        else if (isNaN(this.name)) {
            this.state.error = "User Id can only be number";
            console.log(this.state.error);
            swal(this.state.error, "", "error");
        }
        else if (!this.password) {
            this.state.error = "Password can cannot be empty";
            console.log(this.state.error);
            swal(this.state.error, "", "error");
        }
        else if (isNaN(this.password)) {
            this.state.error = "Password can only be number";
            console.log(this.state.error);
            swal(this.state.error, "", "error");
        }
        else {
            const sendData = {
                name: this.name,
                password: this.password,
            }
            axios.post(this.state.REST_API_LOGIN, sendData)
                .then(res => { console.log(res.data);
                    if (res.data!=""){
                        localStorage.setItem('username', res.data.username);
                        localStorage.setItem('LName', res.data.lastName);
                        localStorage.setItem('FName', res.data.FName);
                        localStorage.setItem('permission', res.data.permission);
                        localStorage.setItem('phoneNumber', res.data.phoneNumber);
                        localStorage.setItem('email', res.data.email);
                        localStorage.setItem('birthDate', res.data.birthDate);
                        localStorage.setItem('password', res.data.password);

                        switch (localStorage.getItem('permission')) {
                            case 'Admin':
                                console.log("Admin");
                                localStorage.setItem('userLink', '/AdminAnimalSearch');
                                this.props.history.push('/AdminAnimalSearch');
                                break;
                            case 'Teacher':
                                console.log('Teacher');
                                localStorage.setItem('userLink', '/TeachingTechnicianAnimalSearch');
                                this.props.history.push('/TeachingTechnicianAnimalSearch');
                                break;
                            case 'Care':
                                console.log("Care");
                                localStorage.setItem('userLink', '/AnimalCareAttendanceAnimalSearch');
                                this.props.history.push('/AnimalCareAttendanceAnimalSearch');
                                break;
                            case 'Health':
                                console.log("Health");
                                localStorage.setItem('userLink', '/AnimalHealthTechnicianAnimalSearch');
                                this.props.history.push('/AnimalHealthTechnicianAnimalSearch');
                                break;
                            case 'Student':
                                console.log("Student");
                                localStorage.setItem('userLink', '/StudentAnimalSearch');
                                this.props.history.push('/StudentAnimalSearch');
                                break;
                            default:
                                console.log("User not found");
                        }
                    }
                    else{
                            swal("User Not Found!", "", "error")                   
                    }
                })
                .catch(response => {
                    console.log(response);
                })
        }
    }
    render() {
        return (
            <div className="login">
                <header>
                    <div className="header-container blog-main-clear">
                        <div className="header-date-container">
                            <div className="header-date-inner">{this.state.date}</div>
                        </div>
                        <div className="header-logo-container">
                            <div className="header-logo-inner"></div>
                        </div>
                    </div>
                </header>
                <div className="body-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="login-signup-inner">
                            <h3 id="form-title">Sign In</h3>
                            <div className="login-input-container form-group">
                                <label>User ID</label>
                                <input type="text"
                                    onChange={e => this.name = e.target.value}
                                    className="form-control" placeholder="Enter ID" />
                            </div>
                            <div className="login-input-container form-group">
                                <label>Password</label>
                                <input type="password"
                                    onChange={e => this.password = e.target.value}
                                    className="form-control" placeholder="Enter password" />
                            </div>
                            <button type="submit" className="login-btn btn btn-danger btn-block">SIGN IN</button>
                            <span style={{ color: "red", fontSize: 25 }}><strong>{this.state.error}</strong></span>
                        </div>
                    </form>
                </div>
                <footer>
                    <div className="search-footer-container">
                        <p className="footer-address-inner">
                            <br />
                            <br />
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}
