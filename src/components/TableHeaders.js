import React from 'react';

function TableHeaders(props) {
    return (
        <thead className="table-header">
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date of Birth</th>
        </tr>   
        </thead>
    )
}

export default TableHeaders;
