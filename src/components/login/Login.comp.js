import React from 'react'
import {Container, Row,Col, Form, Button} from 'react-bootstrap'
import { PropTypes } from 'prop-types'

export const Login = ({handleOnChange, email, password, handleOnSubmit, formSwitcher}) => {

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>
                                Email address
                            </Form.Label>
                            <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder="Enter Email"
                            required
                            >

                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                              Password
                            </Form.Label>
                            <Form.Control
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                            placeholder="Enter Password"
                            required
                            >

                            </Form.Control>
                        </Form.Group>
                        <Button type="submit">Log in</Button>
                    </Form>
                    <hr />
                 </Col>
                </Row>

                <Row>
                    <Col>
                    <a href="#" onClick={()=>formSwitcher("reset")}>Forget password</a>
                    
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
Login.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}
