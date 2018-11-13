import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SignUp from './SignUp';
import SignIn from './SignIn';
import './auth.css'

const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col md='6'>
                    <SignUp setToken={props.setToken} />
                </Col>
                <Col md='6' className="signin-col" >
                    <SignIn setToken={props.setToken} />
                </Col>
            </Row>
        </Container>
    )
}
export default Auth;