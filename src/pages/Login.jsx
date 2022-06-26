import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {

        if (password === "123") {
            dispatch(changeUser(name));
            navigate("/");
        }

    }

    return (
        <div className="container-login">
            <div className="form-login-content">
                <Form>
                    <h1 className="mt-5 text-center">Login</h1>
                    <Row className="justify-content-md-center">
                        <Col className="my-1">
                            <Form.Control type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col className="my-1">
                            <Form.Control type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col>
                            <Button onClick={handleLogin}>Login</Button>
                        </Col>
                    </Row>
                    <hr />
                </Form>
            </div>
        </div>



    );
}

export default Login;
