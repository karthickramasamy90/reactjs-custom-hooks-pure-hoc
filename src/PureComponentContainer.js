import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Parent from './Parent';

function PureComponentContainer() {
    const [id, setId] = useState(1);
    const [salary] = useState(10000);
    const [age] = useState(35);

    useEffect(() => {
        setInterval(() => {
            setId(id + 1);
        }, 2000)
    })

    return(
        <Container>
            <Row>
                <Col>
                    <h2>Welcome to Pure Component</h2>
                    <Parent id={id} salary={salary} age={age} />
                </Col>
            </Row>
        </Container>
    )
}

export default PureComponentContainer;