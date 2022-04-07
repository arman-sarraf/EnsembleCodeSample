import React, {useState} from "react";
 import axios from "axios";
 import AnimalService from "../../service/AnimalService";
 import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

 const ANIMAL_REST_API_URL = 'http://localhost:8080/animal/history/1';

 const AnimalHistory = (props) => {

     const[myArray, setMyArray] = React.useState([]);
     const id = localStorage.getItem('currentAnimal');
     const link = "/AnimalHistory/" + id;

     React.useEffect(() => {
       AnimalService.getAnimalHistory(id).then(response => setMyArray(response.data));
     }, []);
  
    return(
        <div class = "columns"> 
        <div class="column">
            <table class="table">
            <thead>
            <tr>
              <th>Animal ID</th>
                <th>Record ID</th>
                <th>Date</th>
                <th>Measurement/Type</th>
                <th>Value</th>
                <th>User ID</th>
                <th>Vaccination</th>
                
            </tr>
            </thead>
            <tbody>
            {
                myArray.map(myArray =>
                    <tr key={myArray.id}>
                    <td>{myArray.animalId}</td>
                    <td>{myArray.recordId}</td>
                    <td>{myArray.date}</td>
                    <td>{myArray.measurement}</td>
                    <td>{myArray.value}</td>
                    <td>{myArray.userId}</td>
                    <td>{myArray.vaccination}</td>
                    
                    </tr>)
            }
            </tbody>
        </table>
        </div>
          <div class="column is-narrow">
            {/* <button class="button is-dark">Add Animal History</button>  */}
            <Link to={link} className="btn btn-primary">Add History</Link> 
          </div>
      </div>
    );
};

export default AnimalHistory;