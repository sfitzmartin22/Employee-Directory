import React from 'react';

function TableBody(props) {
    return (
        <tr key={props.key}>
            <td><img alt={props.name.last}  /></td>
            <td>{props.name.last}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob.date}</td>
        </tr>   
    )
}

export default TableBody;