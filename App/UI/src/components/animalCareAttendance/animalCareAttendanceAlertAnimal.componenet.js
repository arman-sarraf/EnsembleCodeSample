import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AnimalCareAttendanceAlertAnimal = () => {

    const history = useHistory();

    function handleLogout (){
        localStorage.clear();
        history.push("/Login");
    }

    const FName=localStorage.getItem('FName');
    const LName=localStorage.getItem('LName');

    return (
        <form>
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <h7 className="sidebar-heading d-flex flex-column align-items-center text-center px-3 mt-4 mb-1  text-muted">
                                <span><strong>Animal Care Attendance</strong></span>
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
                                    <Link style={{color: "black"}} className="nav-link" to={"/AnimalCareAttendanceProfile"}>My Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{color: "black"}} className="nav-link" to={"/AnimalCareAttendanceAnimalSearch"}>Animal List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{color: "black"}} className="nav-link" to={"/AnimalCareAttendanceRequestedTreatment"}>Requested Treatment</Link>
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
                                            <td><input className="form-control mr-sm-2" type="search" placeholder="ID" /></td>
                                            <td><input className="form-control mr-sm-2" type="search" placeholder="Name" /></td>
                                            <td><button className="btn btn-outline-primary" type="submit">Search</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h2>Animals List</h2>
                        <div className="table-responsive">
                            <table className="table table-responsive table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">bread</th>
                                        <th scope="col">Color</th>
                                        <th scope="col">Birthday</th>
                                        <th scope="col">Owner</th>
                                        <th scope="col">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>German Shepherd</td>
                                        <td>Brown - Black</td>
                                        <td>23-01-2018</td>
                                        <td>The Owner</td>
                                        <td><a className="fa fa-eye" href="#"></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>Tibetan Mastiff</td>
                                        <td>White</td>
                                        <td>2018-11-10</td>
                                        <td>The Owner</td>
                                        <td><a className="fa fa-eye" href="#"></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>Siberian Husky</td>
                                        <td>Gray</td>
                                        <td>2018-11-10</td>
                                        <td>The Owner</td>
                                        <td><a className="fa fa-eye" href="#"></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>Siberian Husky</td>
                                        <td>Khaki</td>
                                        <td>2018-11-10</td>
                                        <td>The Owner</td>
                                        <td><a className="fa fa-eye" href="#"></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>Siberian Husky</td>
                                        <td>Gray</td>
                                        <td>2018-11-10</td>
                                        <td>The Owner</td>
                                        <td><a className="fa fa-eye" href="#"></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>German Shepherd</td>
                                        <td>Brown - Black</td>
                                        <td>2018-11-10</td>
                                        <td>The Owner</td>
                                        <td><a className="fa fa-eye" href="#"></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>Tibetan Mastiff</td>
                                        <td>White</td>
                                        <td>2018-11-10</td>
                                        <td>The Owner</td>
                                        <td><a className="fa fa-eye" href="#"></a></td>
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
export default AnimalCareAttendanceAlertAnimal;