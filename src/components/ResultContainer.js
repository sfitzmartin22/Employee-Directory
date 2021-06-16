import React, { Component } from 'react';
// import ResultList from "./ResultList";
import API from '../utils/API';
import Navbar from './Navbar';

class ResultContainer extends Component {
	state = {
		results: []
	};

	componentDidMount() {
		API.populateEmployees().then((res) => {
			console.log(res.data.results);
			this.setState({ results: res.data.results, filter: res.data.results });
		});
		console.log(this.state);
	}

	handleinputChange = (event) => {};

	handleFormSubmit = (event) => {
		event.preventDefault();
		this.employeeResults(this.state.results);
	};

	render() {
		return (
			<div>
				<Navbar />
				<ul>{this.state.results}</ul>
			</div>
		);
	}
}

export default ResultContainer;
