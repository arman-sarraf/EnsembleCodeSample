import React, {useState} from "react";
import axios from "axios";

const ANIMAL_REST_API_URL = 'http://localhost:8080/allAnimals';

const AllAnimals = () => {

    const[myArray, setMyArray] = React.useState([]);

    React.useEffect(() => {
      axios.get(ANIMAL_REST_API_URL).then(response => setMyArray(response.data));
    }, []);
  
    return(
          <table class="table">
            <thead>
              <tr>
                <th>Animal ID</th>
                <th>Breed</th>
                <th>City</th>
                <th>Date of Birth</th>
                <th>Name</th>
                <th>Sex</th>
                <th>Status</th>
                <th>Tattoo</th>
                <th>Type</th>
                <th>Owner</th>
              </tr>
            </thead> 
            <tbody>
            {
                myArray.map(myArray =>
                    <tr key={myArray.id}>
                  <td>{myArray.animalId}</td>
                  <td>{myArray.breed}</td>
                  <td>{myArray.city}</td>
                  <td>{myArray.dateBirth}</td>
                  <td>{myArray.name}</td>
                  <td>{myArray.sex}</td>
                  <td>{myArray.status}</td>
                  <td>{myArray.tattoo}</td>
                  <td>{myArray.type}</td>
                  <td>{myArray.userID}</td>
                  </tr>)
            }
            </tbody>
          </table>
    );
};

export default AllAnimals;