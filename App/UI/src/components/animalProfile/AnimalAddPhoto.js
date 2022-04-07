import React, { Component, useEffect, useState, useRef } from "react";
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
import axios from "axios";
import AddPhotoForm from "./AddPhotoForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class AnimalAddPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            date: new Date().toLocaleString()
        };
    }
    
    render() {
        return (
            <form class="animal-profile">
            <div class="rows">
                <div class="row">
                    <AddPhotoForm id={this.state.id}/>

                </div>
                <br></br>
                <br></br>
                <div class="row">    
                    <Link to={"/AnimalProfile/" + this.state.id} className="btn btn-primary">Back to Animal Profile</Link>
                </div>
            </div>
            </form >
        );
    }
}