import React from 'react';
import './App.css';
import JobList from '../JobList/JobList';
import ProfilePic from './ProfilePic2.jpg';
import BackgroundPic from './backgroundPic.jpeg'
let companyList = require('../../util/companyList.json');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: companyList,
    };
    // console.log(`Company list ${JSON.stringify(companyList)}`);
  }
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" rel="stylesheet"/>
        <div>
          <div className={"sidenav"}>
            <img src={ProfilePic} alt={'cat'} id={'catpic'}/>
            <ul>
              <li classname={"sublink"} href="#">Resume</li>
              <li classname={"sublink"} href="#">Projects</li>
              <li classname={"sublink"} href="#">References</li>
              <li classname={"sublink"} href="#">Contact</li>
            </ul>
          </div>
          <div className={"main"}>
            <div className={"buffer"}></div>
            <div>
              <JobList className="Job-List" jobInfo={this.state.jobs}/>
            </div>
          </div>
        </div>

      </div>
    );
  }  
}

export default App;
