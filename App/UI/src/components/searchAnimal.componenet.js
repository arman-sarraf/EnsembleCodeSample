import React, { Component } from "react";
import "bulma/css/bulma.css"
import AllAnimals from "./animalProfile/AllAnimals";

export default class SearchAnimal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString()
        };
    }
    render() {
        return (
            

            <form className="main-search">

                <div className="search-container">
                    <table className="table table-responsive">
                        <tbody>
                            <tr>
                                <td><input className="form-control mr-sm-2" type="search" placeholder="ID" /></td>
                                <td><input className="form-control mr-sm-2" type="search" placeholder="Name" /></td>
                                <td><button className="btn btn-outline-primary" type="submit">Search</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <AllAnimals/>
                    <div className="search-pagination">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabindex="-1">Previous</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </form >
        );
    }
}