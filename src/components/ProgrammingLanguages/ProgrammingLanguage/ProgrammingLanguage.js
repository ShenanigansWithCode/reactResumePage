import React from 'react';

class ProgrammingLanguage extends React.Component {

    render() {
        return (
        <li>{this.props.lang.name}, {this.props.lang.useage}</li>
        )
    }
}

export default ProgrammingLanguage;