import React, { Component } from "react";
// import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";


const TeachingTechnicianProfile = () => {

    const history = useHistory();
    const FName = localStorage.getItem('FName');
    const LName = localStorage.getItem('LName');
    const bithday = localStorage.getItem('birthDate');
    const permission = localStorage.getItem('permission');
    const phoneNumber = localStorage.getItem('phoneNumber');
    const email = localStorage.getItem('email');

    function handleLogout() {
        localStorage.clear();
        history.push("/Login/");
    }

    return (
        <form>
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">

                            <h7 className="sidebar-heading d-flex flex-column align-items-center text-center px-3 mt-4 mb-1  text-muted">
                                <span><strong>Teaching Technician</strong></span>
                            </h7>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="130" />
                                    </div>
                                </li>
                            </ul>
                            <h6 className="sidebar-heading d-flex flex-column align-items-center text-center px-3 mt-4 mb-1 text-muted">
                                <span><strong>{FName}  {LName}</strong></span>
                            </h6>
                            <ul style={{marginTop: 30}} className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <Link style={{color: "black"}}  className="nav-link" to={"/TeachingTechnicianProfile"}>My Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{color: "black"}}  className="nav-link" to={"/TeachingTechnicianUserList"}>Student List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{color: "black"}}  className="nav-link" to={"/TeachingTechnicianBlockedUserList"}>Blocked Student List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{color: "black"}}  className="nav-link" to={"/TeachingTechnicianAnimalSearch"}>Animal List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{color: "black"}}  className="nav-link" to={"/TeachingTechnicianRequestedAnimal"}>Requested Animal</Link>
                                </li>
                            </ul>
                            <button
                                onClick={handleLogout}
                                style={{ marginLeft: 50 }} type="submit" className="btn btn-secondary">Logout</button>
                        </div>
                    </nav>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <h1><strong>Profile</strong></h1>
                        <div className="mt-3">
                            <table className="table table-responsive">
                                <tbody>
                                    <tr>
                                        <th scope="col">Name:</th>
                                        <th scope="col"><strong><i>{FName}</i></strong></th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Family:</th>
                                        <th scope="col"><strong><i>{LName}</i></strong></th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Birtdate:</th>
                                        <th scope="col"><strong><i>{bithday}</i></strong></th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Type of Access:</th>
                                        <th scope="col"><strong><i>{permission}</i></strong></th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Phone Number:</th>
                                        <th scope="col"><strong><i>{phoneNumber}</i></strong></th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Email:</th>
                                        <th scope="col"><strong><i>{email}</i></strong></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </main>
                </div>
            </div>
        </form >
    );
}
export default TeachingTechnicianProfile;