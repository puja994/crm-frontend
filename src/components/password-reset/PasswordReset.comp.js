import React from 'react'
import {Container, Row,Col, Form, Button} from 'react-bootstrap'
import { PropTypes } from 'prop-types'

export const PasswordReset = ({handleOnChange, email,  handleOnResetSubmit, formSwitcher}) => {

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-info text-center">Reset Password</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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

                       
                        <Button type="submit">Reset</Button>
                    </Form>
                    <hr />
                 </Col>
                </Row>

                <Row>
                    <Col>
                    <a href="#" onClick={()=>formSwitcher('login')}>Login</a>
                    
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
PasswordReset.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
 
}
