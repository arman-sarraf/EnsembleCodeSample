import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import swal from 'sweetalert';

export default class AdminAddAnimal extends Component {

    handleLogout = e => {
        localStorage.clear();
        this.props.history.push('/Login');
    }

    handleSubmit = e => {
        
        e.preventDefault();

        if (!this.name) {
            this.state.error = "Name can not be empty";
            swal(this.state.error, "", "error");

        } else if (!this.status) {

            this.state.error = "Status can not be empty";
            swal(this.state.error, "", "error");

        } else if ((!this.tattoo) || (isNaN(this.tattoo))  || (this.tattoo.length!=3)) {

            this.state.error = "Please enter 3 digits for tattoo";
            swal(this.state.error, "", "error");

        } else if (!this.breed) {
            this.state.error = "Breed can not be empty";
            swal(this.state.error, "", "error");

        } else if (!this.type) {
            this.state.error = "Type can not be empty";
            
            swal(this.state.error, "", "error");

        } else if (!this.city) {

            this.state.error = "City can not be empty";
            swal(this.state.error, "", "error");

        } else if (!this.sex) {
            this.state.error = "Please select Male or Female!";
            swal(this.state.error, "", "error");

        }
        else if (!this.dateBirth) {

            this.state.error = "Birthdate can not be empty";
            swal(this.state.error, "", "error");

        }
        else if ((!this.userID) || (isNaN(this.userID))) {

            this.state.error = "Please enter ID for assigned health technician ";
            console.log(this.state.error);
            swal(this.state.error, "", "error");
        }
        else {

            console.log("I am here!");
            
            const sendData = {
                name: this.name,
                status: this.status,
                tattoo: this.tattoo,
                dateBirth: this.dateBirth,
                city: this.city,
                breed: this.breed,
                type: this.type,
                sex: this.sex,
                userID: this.userID,
            }
            axios.post(this.state.REST_API_ADD_ANIMAL, sendData)
            .then(swal("Animal" + " " + sendData.name + " Successfully Added.", "", "success")).then(function() {
                window.location.reload();
            });
        }

    }
    constructor(props) {
        super(props);
        this.state = {
            FName: localStorage.getItem('FName'),
            LName: localStorage.getItem('LName'),
            REST_API_ADD_ANIMAL: "http://localhost:8080/animal/addAnimal",
            gender: "",
            result: "null",
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
                                    style={{ marginLeft: 50 }} type="submit" className="btn btn-secondary">Logout</button>
                            </div>
                        </nav>

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                            </div>
                            <h2 style={{ marginBottom: 20, fontSize: 20 }}>Add Animal</h2>
                            <div className="col-md-8 order-md-1">
                                <div className="col-md-6 mb-3">
                                    <label for="name">Name</label>
                                    <input type="text"
                                        onChange={e => this.name = e.target.value}
                                        className="form-control" id="name" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid name is required.
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label for="status">Status</label>
                                    <input type="text"
                                        onChange={e => this.status = e.target.value}
                                        className="form-control" id="status" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid status is required.
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label for="tattoo">Tattoo (3 Digits)</label>
                                    <input type="text"
                                        onChange={e => this.tattoo = e.target.value}
                                        className="form-control" id="tattoo" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid tattoo number is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="breed">Breed</label>
                                    <input type="text"
                                        onChange={e => this.breed = e.target.value}
                                        className="form-control" id="breed" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid breed is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="type">Type</label>
                                    <input type="text"
                                        onChange={e => this.type = e.target.value}
                                        className="form-control" id="type" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid type is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="city">City</label>
                                    <input type="text"
                                        onChange={e => this.city = e.target.value}
                                        className="form-control" id="city" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid city is required.
                                    </div>
                                </div>
                                <div className="radio-buttons" style={{ fontSize: 19, marginBottom: 15 }}>
                                    <input
                                        id="Male"
                                        value="M"
                                        name="gender"
                                        type="radio"
                                        onChange={e => this.sex = e.target.value}
                                    />
                                    Male
                                    <input style={{ marginLeft: 20 }}
                                        id="Female"
                                        value="F"
                                        name="gender"
                                        type="radio"
                                        onChange={e => this.sex = e.target.value}
                                    />
                                    Female
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label for="start" >Birthdate</label>
                                    <br />
                                    <input onChange={e => this.dateBirth = e.target.value} className="form-control" type="date" id="start" name="trip-start"
                                        min="2005-01-01" max="2022-12-20" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="password">Assigned Health Technician (Must be 7 or 8)</label>
                                    <input onChange={e => this.userID = e.target.value}
                                        type="text" className="form-control" id="userID" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid userID is required.
                                    </div>
                                </div>
                                <button
                                    onClick={this.handleSubmit}
                                    type="submit" className="btn btn-primary btn-block">Submit</button>
                            </div>
                        </main>
                    </div>
                </div>
            </form >
        );
    }
}