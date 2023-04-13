import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const useCounter = (initialValue) => {
    const [ count, setCount ] = useState(initialValue);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return { count, increment, decrement, reset };
}
function CustomHook () {
    const { count, increment, decrement, reset } = useCounter(10);

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Welcome to React Custom Hooks</h2>
                    <h3>Count: {count}</h3>
                    <Button className="btn btn-primary" onClick={increment} >Increment</Button>{" "}
                    <Button className="btn btn-secondary" onClick={decrement} >Decrement</Button>{" "}
                    <Button className="btn btn-danger" onClick={reset} >Reset</Button>
                </Col>
            </Row>
        </Container>
    )

}

export default CustomHook;