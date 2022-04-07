import React, { Component, useEffect, useState, useRef } from "react";
import "bulma/css/bulma.css"
// import AnimalService from "../service/AnimalService";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddPrescriptionForm from "./AddPrescriptionForm";


export default class AnimalAddPrescription extends Component {
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
                    <AddPrescriptionForm id={this.state.id}/>

                </div>
                <br></br>
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