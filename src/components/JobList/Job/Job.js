import React from 'react';
import ResponsibilityList from '../../ResponsibilityList/ResponsibilityList';
import {Card, Row, Col, Container} from 'react-bootstrap';

function Job(props) {
    const {job} = props;
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <Container className="no-padding" fluid>
                        <Row>
                            <Col className="no-padding">
                                {job.formattedName} | <em>{job.title}</em> | {job.location.city}, {job.location.state}
                            </Col>
                            <Col md="auto" className="justify-content-end date">
                                {job.startDate.month}/{job.startDate.year} - {job.endDate.month}/{job.endDate.year}
                            </Col>
                        </Row>
                    </Container>
                </Card.Title>
                <Card.Text className="no-padding"> 
                    <ResponsibilityList responsibilities={job.responsibilities}/>
                    <Container fluid>
                        <br/>
                        {props.renderTechnologies(job.languages, 'Stack')}
                        {props.renderTechnologies(job.technologies, 'Technologies')}
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Job;