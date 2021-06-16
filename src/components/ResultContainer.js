import React, {Component} from "react";
// import ResultList from "./ResultList";
import API from "../utils/API";
import Navbar from "./Navbar"

class ResultContainer extends Component {
    state = {
        results: [],
      };
    
    employeeResults = () => {
        API.populateEmployees().then(res => this.setState(res.data))
        .catch(err => console.error(err))
    }

    componentDidMount() {
    this.employeeResults();
    }

    handleinputChange = event => {
        


    };

    handleFormSubmit = event => {
    event.preventDefault();
    this.employeeResults(this.state.results);
    };

    render () {
        return <div>
        <Navbar
        /> 
        <ul>
        {this.state.results}
        </ul>          
        </div>
    }
    
}

export default ResultContainer;
