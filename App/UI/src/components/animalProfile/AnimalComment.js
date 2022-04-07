import React from "react";
import "bulma/css/bulma.css"
import AnimalService from "../../service/AnimalService";
import axios from "axios";
import swal from 'sweetalert';

const AnimalComments = (props) => {
  
    const[myArray, setMyArray] = React.useState([]);
    const[myComment, setMyComment] = React.useState([]);
    const id = localStorage.getItem('currentAnimal');
    const userId = localStorage.getItem('username');

    React.useEffect(() => {
        AnimalService.getAnimalComments(id).then(response => setMyArray(response.data));
      }, []);

    function commentInput(e) {
        const newHistory = {
            measurement : "Comment",
            value : 0,
            userId : userId,
            vaccination : "N",
        };
        const newComment = {
            Comment : myComment
        };
        console.log(newHistory);
        axios.post('http://localhost:8080/animal/addHistory/' + id, newHistory )
            .then();
        axios.post('http://localhost:8080/animal/addComment/' + id, newComment )
            .then(swal("Submitted Sucessfully", "", "success"));
        setTimeout(() => { window.location.reload(false); }, 500);
      }

    return(
        <div class="rows">
            <div class="row">
            <table class="table">
            <thead>
            <tr>
                <th>Comment ID</th>
                {/* <th>Record ID</th> */}
                <th>Comment</th>
            </tr>
            </thead>
            <tbody>
            {
                myArray.map(myArray =>
                    <tr key={myArray.id}>
                    <td>{myArray.commentId}</td>
                    {/* <td>{myArray.recordId}</td> */}
                    <td>{myArray.description}</td>
                    </tr>)
            } 
            </tbody>
        </table>
            </div>
            <br></br>
            <br></br>
            <div class="row">
                <div class = "columns"> 
                <div class="column">
                    <textarea class="textarea" placeholder="Enter Comment" onChange={e => setMyComment(e.target.value)}></textarea>
                </div>
                <div class="column">
                    <a class="button is-info" onClick={commentInput}>
                        Add Comment
                    </a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalComments;