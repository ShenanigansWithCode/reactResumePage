import React from 'react';
import './App.css';
import JobList from '../JobList/JobList';
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
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:500&display=swap" rel="stylesheet"></link>
        <div>
          <div className={"sidenav"}>
            <ul>
              <li classname={"sublink"} href="#">Projects</li>
              <li classname={"sublink"} href="#">References</li>
              <li classname={"sublink"} href="#">Clients</li>
              <li classname={"sublink"} href="#">Contact</li>
            </ul>
          </div>
          <div className={"main"}>
            <div className={"buffer"}></div>
            <img src={'https://www.geek.com/wp-content/uploads/2015/12/kittyconvict-625x350.jpg'} alt={'cat'} id={'catpic'}/>
            <div className={"buffer"}></div>
            <div>
              <JobList className="Job-List" jobInfo={this.state.jobs}/>
            </div>
            <img src={'https://www.geek.com/wp-content/uploads/2015/12/kittyconvict-625x350.jpg'} alt={'cat'} id={'catpic'}/>
          </div>
        </div>

      </div>
    );
  }  
}

export default App;
