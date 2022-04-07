import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

const User_REST_API_URL = 'http://localhost:8080/studentblocklist';

const TeachingTechnicianBlockedUserList = () => {

    const history = useHistory();
    
    function handleLogout() {
        localStorage.clear();
        history.push("/Login");
    }
    const FName = localStorage.getItem('FName');
    const LName = localStorage.getItem('LName');
    const [myArray, setMyArray] = React.useState([]);

    React.useEffect(() => {
        axios.get(User_REST_API_URL).then(response => setMyArray(response.data));
    }, []);

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

                            <ul style={{marginTop: 30}} className="nav flex-column mb-2">                                <li className="nav-item">
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
                                    style={{marginLeft:50}} type="submit" className="btn btn-secondary">Logout</button>
                        </div>
                    </nav>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">

                            <div>
                                <table className="table table-responsive">
                                    <tbody>
                                        <tr>
                                            <td><input className="form-control mr-sm-2" type="search" placeholder="First Name" /></td>
                                            <td><input className="form-control mr-sm-2" type="search" placeholder="Last Name" /></td>
                                            <td><button className="btn btn-outline-primary" type="submit">Search</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h1 style={{marginTop: 20,marginBottom: 20,fontSize:20}}><strong>Blocked Students</strong></h1>
                        <div className="table-responsive">
                            <table className="table table-responsive table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Uesr ID</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Date of Birth</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Sex</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myArray.map(myArray =>
                                            <tr key={myArray.userID}>
                                                <td>{myArray.username}</td>
                                                <td>{myArray.fname}</td>
                                                <td>{myArray.lname}</td>
                                                <td>{myArray.phoneNumber}</td>
                                                <td>{myArray.birthDate}</td>
                                                <td>{myArray.email}</td>
                                                <td>{myArray.sex}</td>
                                                <td>{myArray.status}</td>
                                                <td>{myArray.permission}</td>

                                            </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        </form >
    );
}
export default TeachingTechnicianBlockedUserList;