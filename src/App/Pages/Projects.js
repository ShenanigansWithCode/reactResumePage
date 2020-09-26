import React from 'react';
import ProjectList from '../../Components/ProjectList/ProjectList';
let projectList = require('../../util/projectList.json');

function Projects(props) {
    return (
            <ProjectList 
                className="Project-List" 
                projectList={projectList}
                getTechnologies={props.getTechnologies} 
                renderTechnologies={props.renderTechnologies}
            />
        )
}

export default Projects;