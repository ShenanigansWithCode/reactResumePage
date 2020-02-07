import React from 'react';

class Responsibility extends React.Component {

    render() {
        return (
            <li>{this.props.resp.description}</li>
        )
    }
}

export default Responsibility;