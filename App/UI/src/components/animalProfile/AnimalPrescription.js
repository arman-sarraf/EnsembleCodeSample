import React, {useState} from "react";
 import axios from "axios";
 import AnimalService from "../../service/AnimalService";
 import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

 const AnimalPrescription = (props) => {

     const[myArray, setMyArray] = React.useState([]);
     const id = localStorage.getItem('currentAnimal');
     const link = "/AnimalPrescriptions/" + id;

     React.useEffect(() => {
       AnimalService.getAnimalPrescriptions(id).then(response => setMyArray(response.data));
     }, []);
  
    return(
        <div class = "columns"> 
        <div class="column">
            <table class="table">
            <thead>
            <tr>
                <th>Animal ID</th>
                <th>Script Record</th>
                <th>Drug Name</th>
                <th>Delivery Method</th>
                <th>User Id</th>
                <th>Date</th>
                <th>Dosage</th>
                <th>Instructions</th>
                <th>TreatmentMethod</th>
                
            </tr>
            </thead>
            <tbody>
            {
                myArray.map(myArray =>
                    <tr key={myArray.id}>
                    <td>{myArray.animalId}</td>
                    <td>{myArray.scriptRecord}</td>
                    <td>{myArray.drugName}</td>
                    <td>{myArray.deliveryMethod}</td>
                    <td>{myArray.userId}</td>
                    <td>{myArray.date}</td>
                    <td>{myArray.dosage}</td>
                    <td>{myArray.instructions}</td>
                    <td>{myArray.treatmentMethod}</td>
                    </tr>)
            }
            </tbody>
        </table>
        </div>
          <div class="column is-narrow">
            <Link to={link} className="btn btn-primary">Add Animal Prescription</Link>
          </div>
      </div>
    );
};

export default AnimalPrescription;