import React from 'react';

function TableBody(props) {
    return (
        <tr>
            <td><img alt={props.name.last} src={props.thumbnail} /></td>
            <td>{props.name.first} {props.name.last}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob.age}</td>
        </tr>   
    )
}

export default TableBody;