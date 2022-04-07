import React from "react";
import "bulma/css/bulma.css"
import AnimalService from "../../service/AnimalService";
import photoCat from "../../image/cat1.jpg";
import photoDog from "../../image/dog1.jpg";
import photoHorse from "../../image/horse1.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AnimalPhoto = (props) => {
    var photo = null;
    var photo2 = null;
    const[myArray, setMyArray] = React.useState([]);
    const[myPhotos, setMyPhotos] = React.useState([]);
    const id = props.id;
    const link = "/AnimalAddPhoto/" + id;

    React.useEffect(() => {
      AnimalService.getAnimalById(id).then(response => setMyArray(response.data));
    }, []);

    React.useEffect(() => {
        AnimalService.getAnimalPhotos(id).then(response => setMyPhotos(response.data));
      }, []);

    if (myArray.type == "Cat") {
        photo = photoCat;
    } else if (myArray.type == "Dog") {
        photo = photoDog;
    } else if (myArray.type == "Horse"){
        photo = photoHorse;
    } 

    photo2 = myPhotos.fileName;
    console.log(myPhotos.type);

  
    return(
        <div class = "columns"> 
        <div class="column">
        <figure class="image is-128x128">
            <img src={photo}/>
        </figure>
        </div>
        <div class="column">
            <figure class="image is-128x128">
                <img src={photo2}/>
            </figure>
        </div>
        <div class="column is-narrow">
            <Link to={link} className="btn btn-primary">Add new Animal Picture</Link>
        </div>
        </div>

    );
};

export default AnimalPhoto;