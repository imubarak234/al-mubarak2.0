import React from 'react';
// Import Components
import { Row, Col, Card, Form, Button } from "react-bootstrap";

class EditFees extends React.Component {
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
                            <h3 className="page-title">Edit Fees</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/fees">Fees</a></li>
                                <li className="breadcrumb-item active">Edit Fees</li>
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
                                            <h5 className="form-title"><span>Fees Information</span></h5>
                                        </Col>

                                        <Col xs={12} sm={6}>
                                            <Form.Group>
                                                <Form.Label>Fees ID</Form.Label>
                                                <Form.Control type="text" value="PRE1234" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Form.Group>
                                                <Form.Label>Fees Type</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Exam Fees</option>
                                                    <option>Select Type</option>
                                                    <option>Class Test</option>
                                                    <option>Exam Fees</option>
                                                    <option>Hostel Fees</option>
                                                    <option>Transport Fees</option>
                                                    <option>Mess Fees</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Form.Group>
                                                <Form.Label>Gender</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Male</option>
                                                    <option>Select Gender</option>	
                                                    <option>Male</option>
                                                    <option>Others</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Form.Group>
                                                <Form.Label>Fees Amount</Form.Label>
                                                <Form.Control type="text" value="$152" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Form.Group>
                                                <Form.Label>Start Date</Form.Label>
                                                <Form.Control type="text" value="23 Apr 2020" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Form.Group>
                                                <Form.Label>End Date</Form.Label>
                                                <Form.Control type="text" value="28 Apr 2020" />
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
export { EditFees };