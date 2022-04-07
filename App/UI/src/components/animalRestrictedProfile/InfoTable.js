import React, { useEffect, useState } from "react";
 import axios from "axios";
 import AnimalService from "../../service/AnimalService";

 const InfoTable = (props) => {

     const[myArray, setMyArray] = React.useState([]);
     const id = props.id;

     React.useEffect(() => {
       AnimalService.getAnimalById(id).then(response => setMyArray(response.data));
     }, []);

    return(
      <div class = "columns"> 
        <div class="column">
          <table class="table">
            <thead>
              <tr>
                <th>Animal ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Breed</th>
                <th>City</th>
                <th>Date of Birth</th>
                <th>Sex</th>
                <th>Status</th>
                <th>Tattoo</th>
                <th>Assigned Vet</th>
              </tr>
            </thead> 
            <tbody>
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
              
            </tbody>
          </table>
      </div>
          <div class="column is-narrow">
          </div>
      </div>
    );
};

export default InfoTable;