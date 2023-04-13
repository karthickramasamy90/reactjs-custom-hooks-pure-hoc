import React, { memo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function PureComponent({salary, age}) {
    console.log("Rendering Pure Component...")
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <p>Salary: {salary}</p>
                        <p>Age: {age}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default memo(PureComponent);