import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Style.css'
import logo192 from '../asset/logo192.png'


const Login = () => {
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col>
                        <div className='login'>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col>
                        <div className="App">
                            <header className="App-header">
                                <img src={logo192} className="App-logo" alt="logo" />
                                {/*
                                <p>
                                    Edit <code>src/App.js</code> and save to reload.
                                </p>
                                <a
                                    className="App-link"
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn React
                                </a>
                                */}
                            </header>
                        </div>

                    </Col>
                </Row>

            </Container>
            <p>
                <Link to='/regis'>REGIS</Link>
            </p>
        </div>
    )
}

export default Login
