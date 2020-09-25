import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
// import ProfilePic from '../../App/ProfilePic2.jpg';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return(
        <Container>
          {/* <img src={ProfilePic} alt={'cat'} id={'catpic'}/> */}
          <Navbar fill fixed="top" bg="dark" variant="dark" className="justify-content-between">
            <Navbar.Brand as={Link}  to="/">Destiny R. Vigil</Navbar.Brand>
            <Nav defaultActiveKey="/" className="justify-content-end">
                <Nav.Item>
                <Nav.Link as={Link} to="/">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={Link} eventkey={"projects"} href="/">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link  as={Link} eventKey="references">Reference</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link  as={Link} eventKey="contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
          </Navbar>
          {/* <Switch>
            <Route exact path='/' component={Resume} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch> */}
      </Container>
    )
}
export default NavBar;