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
                    <Route exact path="/" component={Resume}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/projects" component={Projects}/>
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
