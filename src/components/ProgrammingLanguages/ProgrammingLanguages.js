import React from 'react';
import ProgrammingLanguage from '../ProgrammingLanguage/ProgrammingLanguage';

class ProgrammingLanguages extends React.Component {
    render() {
        return (
            <ul className={"language-list"}>
                {console.log(JSON.stringify(this.props.languages))}
                {
                    this.props.languages.map(lang => {
                        return <ProgrammingLanguage lang={lang} key={lang.id} percent={lang.useage}/>
                    })
                }
            </ul>  
        )
    }
}

export default ProgrammingLanguages;