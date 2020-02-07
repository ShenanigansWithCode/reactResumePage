import React from 'react';
import Responsibility from '../Responsibility/Responsibility';
import './ResponsibilityList.css'

class ResponsibilityList extends React.Component {
    render() {
        return (
            <ul className={"responsibility-list"}>
                {
                    this.props.responsibilities.map(resp => {
                        return <Responsibility resp={resp} key={resp.priority} />
                    })
                }
            </ul>  
        )
    }
}

export default ResponsibilityList;