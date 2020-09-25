import React from 'react';
import './Project.css';
import {Card, Row, Col, Container} from 'react-bootstrap';
function Project(props) {
    const {project} = props;
    return (
        <Card>   
            <Card.Body>
                <Card.Title>
                    <Container className="no-padding" fluid>
                        <Row>
                            <Col className="no-padding">
                                {project.name} | <em>{project.category}</em>                            </Col>
                            <Col md="auto" className="justify-content-end date">
                                {project.dateDeployed.month}/{project.dateDeployed.year}                            </Col>
                        </Row>
                        </Container>
                </Card.Title>
                <Card.Text>
                    <Container fluid>
                        <Row className="add-row-spacing">
                            <Col md="3">
                                <em>Need:</em>
                            </Col>
                            <Col>
                                {project.need}
                            </Col>
                        </Row>
                        <Row className="add-row-spacing">
                            <Col md="3">
                                <em>Description:</em>
                            </Col>
                            <Col>
                                {project.description}
                            </Col>
                        </Row>
                        <Row className="add-row-spacing">
                            <Col md="3">
                                <em>Outcome:</em>
                            </Col>
                            <Col>
                                {project.Outcome}
                            </Col>
                        </Row>
                    </Container>
                </Card.Text>

            </Card.Body>


        </Card>
    )
}
export default Project;