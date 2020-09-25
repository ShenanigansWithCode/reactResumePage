import React from 'react';
import Responsibility from './Responsibility/Responsibility';

function ResponsibilityList(props) {
    return (
        <ul className={"card-list"}>
            {
                props.responsibilities.map(resp => {
                    return <Responsibility resp={resp} key={resp.priority} />
                })
            }
        </ul>  
    )
}

export default ResponsibilityList;