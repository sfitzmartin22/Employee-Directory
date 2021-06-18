import React from 'react';
import "./search.css";

function Search(props) {
    return (
        <form className="search">
            <div className="form-group">
                <input
                onChange={(e) => props.renderSorting(e)}
                placeholder="Search Employees"
                />
            </div>
            </form>
    )
}

export default Search;