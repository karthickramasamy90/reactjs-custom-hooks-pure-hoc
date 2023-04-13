import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PureComponent from './PureComponent';

function Parent({id, salary, age}) {
    console.log("Rendering Parent Component")
    return(
        <Container>
            <Row>
                <Col>
                    <h3>Id: {id}</h3>

                    <PureComponent salary={salary} age={age} />
                </Col>
            </Row>
        </Container>
    )
}

export default Parent;