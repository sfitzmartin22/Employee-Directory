import React, { Component } from 'react';
import API from '../utils/API';
import Navbar from './Navbar';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';
import Search from './Search';
import './resultContainer.css';

class ResultContainer extends Component {
	state = {
		results: [],
        search: "",
        sortedEmployees: [],
		sorted: false
	};

	componentDidMount() {
		API.populateEmployees().then(res => {
			console.log(res.data.results)
			this.setState({ results: res.data.results});
		});
	}

	// handleinputChange = (event) => {
    //     if(event.target.name === "search") {
    //     const searchValue = event.target.value.toLowerCase();
    //     this.setState({search: searchValue})
    // }}

	sortResults = () => {
		let {results, search} = this.state;
		let sortedEmployees= results.filter((sorted) => {
			return (
				sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
				sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
				sorted.email.toLowerCase().includes(search.toLowerCase()) ||
				sorted.phone.toLowerCase().includes(search.toLowerCase())
				);
		});
		this.setState({sortedEmployees});
	}

	renderSort = (e) => {
		this.setState({search: e.target.value}, () => {
			this.sortResults();
			this.setState({sorted: true})
		});
	};

	// handleFormSubmit = (event) => {
	// 	event.preventDefault();
	// 	this.employeeResults(this.state.results);
	// }

	render() {
		return (
		    <div className="body">
				<div>
					<Navbar />
				</div>
					<Search renderSorting={this.renderSort} />
				<table className="table">
					<TableHeaders />
					<tbody>
					{!this.state.sorted ? this.state.results.map((employee) => (
					<TableBody 
						thumbnail={employee.picture.thumbnail}
						name={employee.name}
						phone={employee.phone}
						email={employee.email}
						dob={employee.dob}
						key={employee.login.uuid}
					/>
					))
					: this.state.sortedEmployees.map((employee) => (
					<TableBody 
						thumbnail={employee.picture.thumbnail}
						name={employee.name}
						phone={employee.phone}
						email={employee.email}
						dob={employee.dob}
						key={employee.login.uuid}
					/>	
					))
				}
					</tbody>
				</table>
			</div>
		)
	}
}

export default ResultContainer;
