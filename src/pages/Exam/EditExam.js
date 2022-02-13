import React from 'react';
// Import Components
import { Row, Col, Card, Form, Button } from "react-bootstrap";

class EditExam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <Row>
                        <Col sm={12}>
                            <h3 className="page-title">Edit Exam</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/exam">Exam</a></li>
                                <li className="breadcrumb-item active">Edit Exam</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col sm={12}>
                        <Card>
                            <Card.Body>
                                <Form>
                                <Row>
                                        <Col sm={12}>
                                            <h5 className="form-title"><span>Exam Information</span></h5>
                                        </Col>

                                        <Col xs={12} sm={6}>
                                            <Form.Group>
                                                <Form.Label>Exam Name</Form.Label>
                                                <Form.Control type="text" value="Class Test" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Form.Group>
                                                <Form.Label>Class</Form.Label>
                                                <Form.Control as="select">
                                                    <option>10</option>
                                                    <option>LKG</option>
                                                    <option>UKG</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Form.Group>
                                                <Form.Label>Subject</Form.Label>
                                                <Form.Control type="text" value="English" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Form.Group>
                                                <Form.Label>Fees</Form.Label>
                                                <Form.Control type="text" value="$50" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Form.Group>
                                                <Form.Label>Start Time</Form.Label>
                                                <Form.Control type="text" value="10:00 AM" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Form.Group>
                                                <Form.Label>End Time</Form.Label>
                                                <Form.Control type="text" value="01:00 PM" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Form.Group>
                                                <Form.Label>Event Date</Form.Label>
                                                <Form.Control type="text" value="26-11-2020" />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12}>
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </Col>                                        
                                    </Row>                                    
                                </Form>                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export { EditExam };