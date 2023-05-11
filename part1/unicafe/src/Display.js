import React from 'react'

const Display = (props) => (
        <tr>
            <td>{props.name}</td>
            <td>{props.value} {props.perc}</td>
        </tr>)

export default Display