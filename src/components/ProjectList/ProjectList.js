import React from 'react';
import Project from './Project/Project';
import {CardColumns} from 'react-bootstrap';

function ProjectList(props) {
    return(
        <CardColumns>
            {props.projectList.sort((a, b) => a.id > b.id).map(project => {
                return <Project 
                            project={project} 
                            key={project.id} 
                            renderTechnologies={props.renderTechnologies}
                        />
            })}
        </CardColumns>
    )
}
export default ProjectList;