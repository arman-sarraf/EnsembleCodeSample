import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

const User_REST_API_URL = 'http://localhost:8080/allAnimals';

const TeachingTechnicianAnimalSearch = () => {
    const history = useHistory();

    const[myArray, setMyArray] = React.useState([]);
    const[name, setName] = React.useState('')
    const[id, setID] = React.useState('');

    const LName=localStorage.getItem('LName');
    const FName=localStorage.getItem('FName');

    function handleLogout (){
        localStorage.clear();
        history.push("/Login");
    }

    React.useEffect(() => {
        axios.get(User_REST_API_URL).then(response => setMyArray(response.data));
    }, []);

    function handleSubmit(event){
        event.preventDefault();
        const sendData = {
            name: name,
            id: id,
        }

        axios.post('http://localhost:8080/searchAnimal', sendData).then(response => setMyArray(response.data));
    }

    return (
        <form>
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <h7 className="sidebar-heading d-flex flex-column align-items-center text-center px-3 mt-4 mb-1  text-muted">
                                <span><strong>Student</strong></span>
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
                                    <Link style={{color: "black"}} className="nav-link" to={"/studentProfile"}>My Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{color: "black"}} className="nav-link" to={"/StudentAnimalSearch"}>Animal List</Link>
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
                                                <td><input className="form-control mr-sm-2" type="search" placeholder="ID" onChange={e => setID(e.target.value)}/></td>
                                                <td><input className="form-control mr-sm-2" type="search" placeholder="Name" onChange={e => setName(e.target.value)}/></td>
                                                <td><button className="btn btn-primary" type="submit" onClick={handleSubmit}>Search</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h1 style={{marginTop: 20,marginBottom: 20,fontSize:20}}><strong>Animals List</strong></h1>
                        <div className="table-responsive">
                            <table className="table table-responsive table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Breed</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Date of Birth</th>
                                        <th scope="col">Sex</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Tattoo</th>
                                        <th scope="col">Assigned Vet</th>
                                        <th scope="col">Animal Profile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myArray.map(myArray =>
                                            <tr key={myArray.animalId}>
                                                <td>{myArray.animalId}</td>
                                                <td>{myArray.name}</td>
                                                <td>{myArray.type}</td>
                                                <td>{myArray.breed}</td>
                                                <td>{myArray.city}</td>
                                                <td>{myArray.dateBirth}</td>
                                                <td>{myArray.sex}</td>
                                                <td>{myArray.status}</td>
                                                <td>{myArray.tattoo}</td>
                                                <td>{myArray.userID}</td>
                                                <td><Link to={"/AnimalRestrictedProfile/" + myArray.animalId}> <button className="btn btn-primary" type="submit">Go</button></Link></td>
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
export default TeachingTechnicianAnimalSearch;