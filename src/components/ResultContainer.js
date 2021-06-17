import React, { Component } from 'react';
// import ResultList from "./ResultList";
import API from '../utils/API';
import Navbar from './Navbar';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

class ResultContainer extends Component {
	state = {
		results: [],
        search: "",
        sort: ""
	};

	componentDidMount() {
		API.populateEmployees().then(res => {
			console.log(res.data.results)
			this.setState({ results: res.data.results, filter: res.data.results });
		});
	}

	handleinputChange = (event) => {
        if(event.target.name === "search") {
        const searchValue = event.target.value.toLowerCase();
        this.setState({search: searchValue})
    }}

	handleFormSubmit = (event) => {
		event.preventDefault();
		this.employeeResults(this.state.results);
	}

	render() {
		return (
		    <div className="body">
				<div className="navbar-brand">
					<Navbar />
				</div>
				<table className="table">
					<TableHeaders />
					<tbody>
					{this.state.results.map((employee, key) => (
					<TableBody 
					image={employee.image}
					name={employee.name}
					email={employee.email}
					dob={employee.dob}
					key={key}
					/>
					))}
					</tbody>
				</table>
			</div>
		)
	}
}

export default ResultContainer;
