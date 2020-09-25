import React, {Suspense, lazy} from 'react';
import './App.css';
import Navbar from '../Components/NavBar/NavBar';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Resume = lazy(() => import('../App/Pages/Resume'));
const Projects = lazy(() => import('../App/Pages/Projects.js'));

let companyList = require('../util/companyList.json');
let projectListJson = require('../util/projectList.json');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: companyList,
      projects: projectListJson,
      currentPage: 'home'
    };

  }
  render() {
    return (
      <Container>
        <Row>
            <Col>
            <Navbar/>
            </Col>
        </Row>
        <Row>
          <Col>
            <span style={{height: "56px"}}/>
            <Router>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact path="/" component={Resume}/>
                  <Route path="/projects" component={Projects}/>
                </Switch>
              </Suspense>
            </Router>
          </Col>
        </Row>   
      </Container>
    );
  }  
}

export default App;
