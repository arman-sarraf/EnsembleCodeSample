import React, { useEffect, useState } from "react";
 import axios from "axios";
 import AnimalService from "../../service/AnimalService";

 const ANIMAL_REST_API_URL = 'http://localhost:8080/animal/1';

 const AnimalName = (props) => {

     const[myArray, setMyArray] = React.useState([]);
     const id = props.id;

     React.useEffect(() => {
       AnimalService.getAnimalById(id).then(response => setMyArray(response.data));
     }, []);

    return(
      <div> 
          <h1 class="title">{myArray.name}'s Animal Page</h1>
      </div>
    );
};

export default AnimalName;