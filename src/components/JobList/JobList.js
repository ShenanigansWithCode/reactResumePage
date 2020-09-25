import React from 'react';
import './JobList.css';
import Job from './Job/Job';
import {CardColumns} from 'react-bootstrap';


class JobList extends React.Component {

    render() {
        return (
            <CardColumns>
                {this.props.jobInfo.map(job => {
                    return <Job job={job} key={job.id}/>
                })}
            </CardColumns>
        )
    }
}

export default JobList;