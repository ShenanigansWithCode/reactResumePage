import React from 'react';
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
                        <Row className="add-row-spacing no-padding">
                            <Col md="2" className="no-padding">
                                <b><em>Need:</em></b>
                            </Col>
                            <Col className="no-padding">
                                {project.need}
                            </Col>
                        </Row>
                        <Row className="add-row-spacing no-padding">
                            <Col md="2" className="no-padding">
                                <b><em>Description:</em></b>
                            </Col>
                            <Col className="no-padding">
                                {project.description}
                            </Col>
                        </Row>
                        <Row className="add-row-spacing no-padding">
                            <Col md="2" className="no-padding">
                                <b><em>Outcome:</em></b>
                            </Col>
                            <Col className="no-padding">
                                {project.outcome}
                            </Col>
                        </Row>
                        {props.renderTechnologies(project.languages, 'Stack', "2")}
                        {props.renderTechnologies(project.platform, 'Platform', "2")}
                    </Container>
                </Card.Text>

            </Card.Body>


        </Card>
    )
}
export default Project;