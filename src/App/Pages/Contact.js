import React from 'react';
import {Card, Row, Col, Container, Nav, CardColumns} from 'react-bootstrap';

function Contact(props) {
    return (
        <CardColumns fluid >
            {/* <Card>
                <Card.ImgOverlay>
                <Card.Img src={require("../ProfilePic2.jpg")} alt="Card image" />
                </Card.ImgOverlay>
            </Card> */}
            <Card>
                <Card.Body>
                <Card.Text>
                        <Container fluid>
                            <Row className="add-row-spacing">
                                <Col md="3">
                                    <em>Email:</em>
                                </Col>
                                <Col>
                                <Nav.Item>
                                    <Nav.Link href="mailto:destinyvigil@gmail.com">destinyvigil@gmail.com</Nav.Link>
                                </Nav.Item>
                                </Col>
                            </Row>
                            <Row className="add-row-spacing">
                                <Col md="3">
                                    <em>LinkedIn:</em>
                                </Col>
                                <Col>
                                    <Nav.Item>
                                        <Nav.Link href="https://www.linkedin.com/in/destinyrvigil/">https://www.linkedin.com/in/destinyrvigil</Nav.Link>
                                    </Nav.Item>     
                                </Col>
                            </Row>
                            <Row className="add-row-spacing">
                                <Col md="3">
                                    <em>Github:</em>
                                </Col>
                                <Col>
                                    <Nav.Item>
                                        <Nav.Link href="https://github.com/ShenanigansWithCode">https://github.com/ShenanigansWithCode</Nav.Link>
                                    </Nav.Item>   
                                </Col>
                            </Row>
                            <Row className="add-row-spacing">
                                <Col md="3">
                                    <em>LeetCode:</em>
                                </Col>
                                <Col>
                                    <Nav.Item>
                                        <Nav.Link href="https://leetcode.com/destinyvigil/">https://leetcode.com/destinyvigil</Nav.Link>
                                    </Nav.Item>   
                                </Col>
                            </Row>
                        </Container>
                    </Card.Text>
                </Card.Body>
                {/* <Card.Image variant="top" src={require("../ProfilePic2.jpg")}>

                </Card.Image> */}
            </Card>
        </CardColumns>
        )
}

export default Contact;