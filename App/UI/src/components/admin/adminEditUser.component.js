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

        if (!this.state.fname_editUser){
            this.state.error = "First Name can not be empty";
            swal(this.state.error, "", "error");

        }else if(!this.state.lname_editUser){

            this.state.error = "Last Name can not be empty";
            swal(this.state.error, "", "error");

        }else if(!this.state.email_editUser){

            this.state.error = "Email can not be empty";
            swal(this.state.error, "", "error");

        }else if(!this.state.phoneNumber_editUser){
            this.state.error = "Phone Number can not be empty";
            swal(this.state.error, "", "error");
            
        }else if(!this.state.birth_editUser){
            
            this.state.error = "Birthdate can not be empty";
            swal(this.state.error, "", "error");
        }
        else{
            const sendData = {
                FName_edit: this.state.fname_editUser,
                LName_edit: this.state.lname_editUser,
                email_edit: this.state.email_editUser,
                phoneNumber_edit: this.state.phoneNumber_editUser,
                birthdate_edit: this.state.birth_editUser,
            }
            axios.put("http://localhost:8080/updateUserInfo/" + this.state.id, sendData)
                 .then(res => {
                     if (res.data==true){
                         
                        swal("User" + " " + sendData.FName_edit +" "+ sendData.LName_edit + " Successfully Updated.","","success")
                        .then(function() {
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
            gender:"",
            result:"null",
            id:this.props.match.params.id,
            date: new Date().toLocaleString(),  
            fname_editUser: "",
            lname_editUser: "",
            birth_editUser: "",
            email_editUser: "",
            phoneNumber_editUser: "",
            permission_editUser: "",
           
        };
        const status = { Status: "" };
        axios.put("http://localhost:8080/getUserInfo/"+this.state.id, status).then(response => 
        {
        this.setState({ fname_editUser: response.data.fname });
        this.setState({ lname_editUser: response.data.lname });
        this.setState({ birth_editUser: response.data.birthDate });
        this.setState({ phoneNumber_editUser: response.data.phoneNumber });
        this.setState({ email_editUser: response.data.email });
        this.setState({ permission_editUser: response.data.permission });       
         });
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
                            <h2 style={{ marginBottom: 20, fontSize: 20 }}> Edit User</h2>
                            
                            <form class="col-md-8 order-md-1 needs-validation">  
                                <div className="col-md-6 mb-3">
                                    <label for="firstName">First Name</label>
                                    <input type="text"
                                        onChange={e => this.setState({ fname_editUser:e.target.value})}
                                        className="form-control" id="firstName"  defaultValue= {this.state.fname_editUser} required/>
                                        
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label for="lastName">Last Name</label>
                                    <input type="email"
                                        onChange={e => this.setState({ lname_editUser: e.target.value})}
                                        className="form-control" id="lastName" defaultValue= {this.state.lname_editUser} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label for="email">Email</label>
                                    <input type="email"
                                        onChange={e => this.setState({ email_editUser:e.target.value})}
                                        className="form-control" id="email" defaultValue= {this.state.email_editUser}  required />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="phoneNumber">Phone Number</label>
                                    <input type="text"
                                        onChange={e => this.setState({ phoneNumber_editUser:e.target.value})}
                                        className="form-control" id="phoneNumber" defaultValue= {this.state.phoneNumber_editUser} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="lastName">Permission</label>
                                    <input type="text"
                                        onChange={e => this.setState({ permission_editUser:e.target.value})}
                                        className="form-control" id="role" defaultValue={this.state.permission_editUser} required />
                                    <div className="invalid-feedback">
                                        Valid role is required.
                                    </div>
                                </div>
                               
                                <div className="col-md-6 mb-3" >
                                    <label for="start" >Birthdate </label>
                                    <br />
                                    <input onChange={e => this.setState({ birth_editUser:e.target.value})} className="form-control" type="date" id="start" name="trip-start"
                                        min="2005-01-01" max="2022-12-20" defaultValue={this.state.birth_editUser}/>
                                </div>
                               <button
                                    onClick={this.handleSubmit}
                                    type="submit" className="btn btn-primary btn-block">Update</button>
                            
                            </form>
                        </main>
                    </div>
                </div>
            </form >
        );
    }
}