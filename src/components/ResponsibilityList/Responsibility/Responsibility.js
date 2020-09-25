import React from 'react';

function Responsibility(props) {
    return (
        <li className="card-list">{props.resp.description}</li>
    )
}

export default Responsibility;