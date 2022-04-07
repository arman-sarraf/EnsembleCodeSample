import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InfoTable from "./InfoTable"
import AnimalPhoto from "./AnimalPhotos";
import AnimalProblems from "./AnimalProblems";
import AnimalHistory from "./AnimalHistory";
import AnimalPrescription from "./AnimalPrescription";
import AnimalComments from "./AnimalComment";
import "bulma/css/bulma.css"
// import AnimalService from "../service/AnimalService";
import AnimalName from "./AnimalName"
import AnimalStatus from "./AnimalStatus";


export default class AnimalProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            date: new Date().toLocaleString(),  
        };
    localStorage.setItem('currentAnimal', this.state.id);
    console.log(this.state.id)
    }
    render() {
        return (
            <form class="animal-profile">
                    <AnimalName id={this.state.id}/>
                <div class="rows">
                        <div class="row">
                            <AnimalPhoto id={this.state.id}/>
                        </div>
                        <div class="row">
                            <AnimalStatus id={this.state.id}/>
                        </div>
                        <h3 class="title is-3">Animal Information</h3>
                        <div class="row">
                            <InfoTable id={this.state.id}/>
                        </div>
                        <br></br>
                        <h3 class="title is-3">Animal Problems</h3>
                        <div class="row">
                            <AnimalProblems id={this.state.id}/>
                        </div>
                        <br></br>
                        <h3 class="title is-3">Animal Prescriptions</h3>
                        <div class="row">
                            <AnimalPrescription id={this.state.id}/>
                        </div>
                        <br></br>
                        <h3 class="title is-3">Animal History</h3>
                        <div class="row">
                            <AnimalHistory id={this.state.id}/>
                        </div>
                        <br></br>
                        <h3 class="title is-3">Animal Comments</h3>
                        <div class="row">
                            <AnimalComments id={this.state.id}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div class="row">
                        <Link to={localStorage.getItem('userLink')} className="btn btn-primary">Back to User Profile</Link>
                        </div>


                </div>
            </form >
        );
    }
}