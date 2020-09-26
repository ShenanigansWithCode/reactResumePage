import React from 'react';
import JobList from '../../Components/JobList/JobList'
let companyList = require('../../util/companyList.json');

function Resume(props) {
    return (
        <JobList 
            className="Job-List" 
            jobInfo={companyList}
            renderTechnologies={props.renderTechnologies}        
        />
    )
}

export default Resume;