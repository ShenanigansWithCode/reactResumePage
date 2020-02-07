import React from 'react';
import './JobList.css';

import Job from '../Job/Job';

class JobList extends React.Component {

    render() {
        return (
            <div className="job-list">
                {this.props.jobInfo.map(job => {
                    return <Job job={job} key={job.id}/>
                })}
            </div>
        )
    }
}

export default JobList;