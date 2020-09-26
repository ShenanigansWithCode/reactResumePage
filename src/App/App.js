import React, {Suspense, lazy} from 'react';
import './App.css';
import Navbar from '../Components/NavBar/NavBar';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Resume = lazy(() => import('../App/Pages/Resume'));
const Projects = lazy(() => import('../App/Pages/Projects.js'));
const References = lazy(() => import('../App/Pages/References.js'));
const Contact = lazy(() => import('../App/Pages/Contact.js'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    };
    this.getTechnologies = this.getTechnologies.bind(this);
    this.renderTechnologies = this.renderTechnologies.bind(this);
  }
  getTechnologies(technologies) {
    let numOfTech = Object.keys(technologies).length;
    let technologiesUsed = technologies.sort((a, b) => a.usage > b.usage).map((tech, index) => {
        let commaStr = index < numOfTech - 1 ? ', ' : '';
        return tech.name + commaStr
    })
    return technologiesUsed
  }
  renderTechnologies(tech, label, colwidth="auto") {
    let techUsedStr = this.getTechnologies(tech)
    if(Object.keys(tech).length> 0) {
        return (
            <Row className="add-row-spacing no-padding">
                <Col md={colwidth} className="no-padding">
                    <b><em>{label}:</em></b>
                </Col>  
                <Col className="no-padding">
                    <em>{techUsedStr}</em>
                </Col>
            </Row>
        )
    }
  }
  render() {
    return (
      <Router>
        <Container fluid>
          <Row style={{paddingTop: '71px'}}>
              <Col>
              <Navbar/>
              </Col>
          </Row>
          <Row>
            <Col>
                <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                    <Route exact path="/" 
                          component={() => 
                            <Resume 
                              renderTechnologies={this.renderTechnologies}
                            />}
                    /> 
                    <Route path="/resume"
                          component={() => 
                            <Resume 
                              renderTechnologies={this.renderTechnologies}
                            />}
                    />
                    <Route path="/projects"
                          component={() => 
                            <Projects 
                              renderTechnologies={this.renderTechnologies}
                            />}
                    />                                          
                    <Route path="/references" component={References}/>
                    <Route path="/contact" component={Contact}/>
                  </Switch>
                </Suspense>
            </Col>
          </Row>   
        </Container>
      </Router>
    );
  }  
}

export default App;
