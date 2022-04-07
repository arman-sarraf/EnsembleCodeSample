import React, {useState} from "react";
 import axios from "axios";
 import AnimalService from "../../service/AnimalService";
 import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 

 function AnimalProblems(props) {

     const[myArray, setMyArray] = React.useState([]);
     const id = localStorage.getItem('currentAnimal');
     const link = "/AnimalProblems/" + id;

     React.useEffect(() => {
       AnimalService.getAnimalProblems(id).then(response => setMyArray(response.data));
     }, []);

    return(
        <div class = "columns"> 
        <div class="column">
            <table class="table">
            <thead>
            <tr>
                <th>Animal ID</th>
                <th>Disease</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {
                myArray.map(myArray =>
                    <tr key={myArray.id}>
                    <td>{myArray.animalId}</td>
                    <td>{myArray.disease}</td>
                    <td>{myArray.description}</td>
                    </tr>)
            }
            </tbody>
        </table>
        </div>
      </div>
    );
};

export default AnimalProblems;