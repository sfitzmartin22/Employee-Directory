import React from 'react';

function TableBody(props) {
    return (
        <tbody className="table-body">
        <tr>
            <td><img alt={props.name} src={props.thumbnail} /></td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>   
        </tbody>
    )
}

export default TableBody;