import React, { useEffect, useState, useRef } from "react";
 import axios from "axios";
 import AnimalService from "../../service/AnimalService";
 import swal from 'sweetalert';

 const AnimalStatus = (props) => {
     const[changeStatus, setChangeStatus] = React.useState();
     const statusText = useRef();
     const id = props.id;

  function statusInput(e) {
    console.log(changeStatus);
    const status = {Status : changeStatus};
       axios.put('http://localhost:8080/animal/updateStatus/' + id, status)
           .then();
    window.location.reload(false);
  }

    return(
        <div class="field has-addons">
            <div class="control">
                <label for="type"></label>
                    <input type="text"
                        onChange={e => setChangeStatus(e.target.value)}
                        className="form-control" id="type" placeholder="Enter New Status" required />
                    <div className="invalid-feedback">
                        Valid type is required.
                    </div>
            </div>
            <br></br>
                <a class="button is-info" onClick={statusInput}>
                    Update
                </a>
        </div>
    );
};

export default AnimalStatus;