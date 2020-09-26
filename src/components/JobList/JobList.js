import React from 'react';
import './JobList.css';
import Job from './Job/Job';
import {CardColumns} from 'react-bootstrap';


function JobList(props) {
    return (
        <CardColumns>
            {props.jobInfo.map(job => {
                return <Job 
                            job={job} 
                            key={job.id}
                            renderTechnologies={props.renderTechnologies}    
                        />
            })}
        </CardColumns>
    )
}


export default JobList;