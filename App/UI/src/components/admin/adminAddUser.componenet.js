import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import swal from 'sweetalert';
export default class AdministratorAccess extends Component {

    handleLogout = e=>{
        localStorage.clear();
        this.props.history.push('/Login');
    }
    handleSubmit = e => {

        e.preventDefault();

        if (!this.FName){
            this.state.error = "First Name can not be empty";
            swal(this.state.error, "", "error");

        }else if(!this.LName){

            this.state.error = "Last Name can not be empty";
            swal(this.state.error, "", "error");

        }else if(!this.email){

            this.state.error = "Email can not be empty";
            swal(this.state.error, "", "error");

        }else if(!this.phoneNumber){
            this.state.error = "Phone Number can not be empty";
            swal(this.state.error, "", "error");
            
        }else if((!this.permission) || (this.permission!="Admin" && this.permission!="Care" && this.permission!="Student" && this.permission!="Teacher" && this.permission!="Health" )){

            this.state.error = "Please enter one of the Admin, Care, Student, Teacher, Health as a permission";
            swal(this.state.error, "", "error");

        }else if(!this.gender){

            this.state.error = "Please select Male or Female!";
            swal(this.state.error, "", "error");

        }else if(!this.birthday){
            
            this.state.error = "Birthdate can not be empty";
            swal(this.state.error, "", "error");

        }else if(!this.activatedate){
            this.state.error = "Activation Date can not be empty";
            swal(this.state.error, "", "error");

        }
        else if((!this.password) || (isNaN(this.password))){

            this.state.error = "Please enter number for password";
            console.log(this.state.error);
            swal(this.state.error, "", "error");
        }
        else{
            const sendData = {
                FName: this.FName,
                LName: this.LName,
                email: this.email,
                phoneNumber: this.phoneNumber,
                permission: this.permission,
                activatedate: this.activatedate,
                password: this.password,
                birthday: this.birthday,
                gender: this.gender,
            }
            axios.post(this.state.REST_API_ADD_USER, sendData)
                 .then(res => {
                     if (res.data==true){
                        swal("User"+" "+ sendData.FName +" "+ sendData.LName + " Successfully Added.","","success")
                        .then(function() {
                            window.location.reload();
                        });
                     }
                 })
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            FName: localStorage.getItem('FName'),
            LName: localStorage.getItem('LName'),
            REST_API_ADD_USER: "http://localhost:8080///addUser",
            gender:"",
            result:"null",
        };
    }
    render() {
        return (
            <form>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                            <div className="sidebar-sticky">
                                <h7 className="sidebar-heading d-flex flex-column align-items-center text-center px-3 mt-4 mb-1  text-muted">
                                    <span><strong>Administrator</strong></span>
                                </h7>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="130" />
                                        </div>
                                    </li>
                                </ul>
                                <h6 className="sidebar-heading d-flex flex-column align-items-center text-center px-3 mt-4 mb-1 text-muted">
                                    <span><strong>{this.state.FName}  {this.state.LName}</strong></span>
                                </h6>
                                <ul style={{marginTop: 30}} className="nav flex-column mb-2">
                                    <li className="nav-item">
                                        <Link style={{color: "black"}}  className="nav-link" to={"/AdminProfile"}>My Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{color: "black"}}  className="nav-link" to={"/AdminUserList"}>User List</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{color: "black"}}  className="nav-link" to={"/AdminBlockedUserList"}>Blocked User List</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{color: "black"}}  className="nav-link" to={"/AdminAnimalSearch"}>Animal List</Link>
                                    </li>
                                </ul>
                                <button
                                    onClick={this.handleLogout}
                                    style={{marginLeft:50}} type="submit" className="btn btn-secondary">Logout</button>
                            </div>
                        </nav>

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                            </div>
                            <h2 style={{ marginBottom: 20, fontSize: 20 }}> Add User</h2>
                            <form class="col-md-8 order-md-1 needs-validation">  
                                <div className="col-md-6 mb-3">
                                    <label for="firstName">First Name</label>
                                    <input type="text"
                                        onChange={e => this.FName = e.target.value}
                                        className="form-control" id="firstName" placeholder="" required/>
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label for="lastName">Last Name</label>
                                    <input type="email"
                                        onChange={e => this.LName = e.target.value}
                                        className="form-control" id="lastName" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label for="email">Email</label>
                                    <input type="email"
                                        onChange={e => this.email = e.target.value}
                                        className="form-control" id="email" placeholder="you@example.com" required />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="phoneNumber">Phone Number</label>
                                    <input type="text"
                                        onChange={e => this.phoneNumber = e.target.value}
                                        className="form-control" id="phoneNumber" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="lastName">Permission</label>
                                    <input type="text"
                                        onChange={e => this.permission = e.target.value}
                                        className="form-control" id="role" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid role is required.
                                    </div>
                                </div>
                                <div className="radio-buttons" style={{ fontSize: 19,marginBottom: 15 }}>
                                    <input 
                                        id="Male"
                                        value="M"
                                        name="gender"
                                        type="radio"
                                        onChange={e => this.gender = e.target.value}
                                    />
                                    Male   
                                    <input style={{ marginLeft: 20 }}
                                        id="Female"
                                        value="F"
                                        name="gender"
                                        type="radio"
                                        onChange={e => this.gender = e.target.value}
                                    />
                                    Female
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label for="start" >Birthdate</label>
                                    <br />
                                    <input onChange={e => this.birthday = e.target.value} className="form-control" type="date" id="start" name="trip-start"
                                        min="2005-01-01" max="2022-12-20" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="start" >Activation Date</label>
                                    <br />
                                    <input onChange={e => this.activatedate = e.target.value} className="form-control" type="date" id="start" name="trip-start"
                                        min="2018-01-01" max="2022-12-20" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="password">Password</label>
                                    <input onChange={e => this.password = e.target.value}
                                        type="text" className="form-control" id="password" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid role is required.
                                    </div>
                                </div>
                                <button
                                    onClick={this.handleSubmit}
                                    type="submit" className="btn btn-primary btn-block">Submit</button>
                            </form>
                        </main>
                    </div>
                </div>
            </form >
        );
    }
}