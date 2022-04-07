import React, { useEffect, useState, useRef } from "react";
 import axios from "axios";
 import AnimalService from "../../service/AnimalService";
 import swal from 'sweetalert';

 const AddPhotoForm = (props) => {
     const[addFileName, setAddFileName] = React.useState();
     const[addType, setAddType] = React.useState();
    const id = props.id;
    var error = null;

  function photoInput(e) {

    if (!addFileName) {
        error = "File name cannot be empty";
        console.log(error);
        swal(error, "", "error");
    }
    else if (!addType) {
        error = "Photo type cannot be empty";
        console.log(error);
        swal(error, "", "error");
    }
    else {
    
    const newHistory = {
        measurement : "Photo",
        value : 0,
        userId : id,
        vaccination : "N",
    };

    console.log(newHistory);
        
    axios.post('http://localhost:8080/animal/addHistory/' + id, newHistory )
        .then();


    const newPhoto = { fileName: addFileName, type: addType};
    console.log(newPhoto );
       axios.post('http://localhost:8080/animal/addPhoto/' + id, newPhoto)
           .then(swal("Submitted Sucessfully", "", "success"));
    // window.location.reload(false);
  }
}

    return(
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                            </div>
                            <h3 class="title is-3">Add Animal Photo</h3>
                            <div class="col-md-8 order-md-1">
                                <div class="field">
                                    <label class="label">File Name</label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="enter "  onChange={e => setAddFileName(e.target.value)}/>
                                    </div>
                                    </div>

                                    <div class="field">
                                    <label class="label">Enter photo type (ex. JPEG or PNG)</label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="enter photo type" onChange={e => setAddType(e.target.value)}/>
                                    </div>
                                    </div>
                                <a class="button is-info" onClick={photoInput}>
                                    Add Animal Photo
                                </a>
                            </div>
                        </main>
    
    );
};

export default AddPhotoForm;