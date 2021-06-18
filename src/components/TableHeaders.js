import React from 'react';

function TableHeaders(props) {
    return (
        <thead className="table-header">
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Age
                <button onClick={props.sortAscending}></button>
                <button onClick={props.sortDescending}></button></th>
        </tr>   
        </thead>
    ) 
}

export default TableHeaders;
