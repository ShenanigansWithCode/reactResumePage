import React from 'react';
import ResponsibilityList from '../ResponsibilityList/ResponsibilityList';
import HSBar from 'react-horizontal-stacked-bar-chart';

import './Job.css';
class Job extends React.Component {
    constructor(props) {
        super(props);

        this.formatLanguagesForBar = this.formatLanguagesForBar.bind(this);
        this.renderProgrammingJobs = this.renderProgrammingJobs.bind(this);
        this.renderTechnologies = this.renderTechnologies.bind(this);
        this.renderDividerBar = this.renderDividerBar.bind(this)
        // this.setBarWidth = this.setBarWidth.bind(this);
    }
    formatLanguagesForBar(items) {
        const colors = {"JavaScript": "red", "Apex": "purple", "SQL": "green", "SOQL":"limegreen", "HTML":"grey", "Python":"orange", "Salesforce": "rgb(9,161,223)", "Excel":"darkgreen", "Mavenslink":"magenta", "Tableau":"steelblue"}
        const data = items.map((item) =>
            {   
                return {
                    "value" : item.useage,
                    "name": item.name,
                    "description": `${item.useage * 100}%`,
                    "color": colors[item.name]
                }
            }

        )
        return data;
    }
    renderProgrammingJobs(languages, job) {
        if(Object.keys(languages).length !== 0) {
            return  (
                <div className={"lbox"}>
                    <HSBar id="hsbarl" height={"20px"} fontColor="rgb(255,255,255)" showTextIn={"true"} data={this.formatLanguagesForBar(languages)}/>
                    <h3 >Programming: {job.percentProgramming}%</h3>
                </div>
            )
        }
    }
    renderTechnologies(technologies, job) {
        if(Object.keys(technologies).length !== 0) {
            return  (
                <div className={"rbox"}>
                    <HSBar id="hsbarr" height={"20px"} fontColor="rgb(255,255,255)" showTextIn={"true"} data={this.formatLanguagesForBar(technologies)}/>
                    <h3>Other Tasks: {100 - job.percentProgramming}%</h3>
                </div>
            )    
        }
        console.log(`no languages found ${JSON.stringify(technologies)} ${typeof(technologies)}`)
    }
    renderDividerBar(languages,technologies) {
        if(Object.keys(languages).length !== 0 && Object.keys(technologies).length !== 0) {
            return  (
                <div className={"middle"}>
                    <div className={"line1"}></div>
                </div>
            )
        }
    }
    render() {
        const {job} = this.props;
        const mWidth = .5;
        const lWidth = job.percentProgramming - (mWidth/2);
        const rWidth = 100 - lWidth - mWidth; //subtract 1 from each side to account for the 2% middle
        console.log(`lwidth: ${lWidth}, rWidth: ${rWidth}`)
        var gridWidthValues = `${lWidth}% ${mWidth}% ${rWidth}%`;
        console.log(gridWidthValues)
        // const barbox = {
        //     "display": "grid",
        //     "grid-template-columns": gridWidthValues,
        //     "width": "100%",
        //     "align-items": "top",
        //     "justify-content": "stretch",
        //     "font-size": 6,
        //     "font-family": "Roboto Slab, serif"
        //   }
        return (
            <div className="job-block">
                <div className={"job-header-box"}>
                    <h2 className="job-header">{job.formattedName} | <em>{job.title}</em> | {job.location.city}, {job.location.state} </h2> 
                    <h2 className="job-header date">{job.startDate.month}/{job.startDate.year} - {job.endDate.month}/{job.endDate.year} </h2>
                </div>
                {/* <div style={barbox}>
                    {this.renderProgrammingJobs(job.languages, job)}
                    {this.renderDividerBar(job.languages, job.technologies)}
                    {this.renderTechnologies(job.technologies, job)}
                </div> */}
                <ResponsibilityList responsibilities={job.responsibilities}/>
            </div>
        )
    }
}

export default Job;