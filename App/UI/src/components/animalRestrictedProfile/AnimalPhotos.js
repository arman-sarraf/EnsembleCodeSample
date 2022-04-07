import React from "react";
import "bulma/css/bulma.css"
import AnimalService from "../../service/AnimalService";
import photoCat from "../../image/cat1.jpg";
import photoDog from "../../image/dog1.jpg";
import photoHorse from "../../image/horse1.jpg";

const AnimalPhoto = (props) => {
    var photo = null;
    const[myArray, setMyArray] = React.useState([]);
    const id = props.id;

    React.useEffect(() => {
      AnimalService.getAnimalById(id).then(response => setMyArray(response.data));
    }, []);

    if (myArray.type == "Cat") {
        photo = photoCat;
    } else if (myArray.type == "Dog") {
        photo = photoDog;
    } else if (myArray.type == "Horse"){
        photo = photoHorse;
    } 
  
    return(
        <div class = "columns"> 
        <div class="column">
        <figure class="image is-128x128">
            <img src={photo}/>
        </figure>
        </div>
        <div class="column">
        
        </div>
        </div>

    );
};

export default AnimalPhoto;