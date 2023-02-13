import React, { useState } from 'react';
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Login = () => {
    const [userId, setUserId] = useState('exist_testuser');
    const [pwd, setPwd] = useState('');

    const inputId = (e) => {
        setUserId(e.target.value);
    }

    const inputPwd = (e) => {
        setPwd(e.target.value);
    }

    const login = (e) => {
        e.preventDefault();
        fetch("/login", {
            method : 'POST',
            headers : {'Content-Type' : 'application/json; charset=UTF-8'},
            body : JSON.stringify({
                userId : userId,
                pwd : pwd
            })
        })
        // .then(response => response.json())
        .then(response => {
            console.log(response);
            if(response.status){
                localStorage.setItem("Authorization", response.headers.get("Authorization"));
                localStorage.setItem("RefreshToken", response.headers.get("RefreshToken"));
                localStorage.setItem("Authoization_TIME", response.headers.get("Authoization_TIME"));
                window.location.href ='/';
            }else{
                alert('error');
            }
            
        })
    }
    

    return (
        <div>
        
        <Container className="panel">
            <h3>로그인</h3> 
            <h3>exist_testuser</h3>
            <Form onSubmit={login}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Col sm>                        
                        <Form.Control                                                         
                            placeholder="UserID" 
                            // onChange={inputId}
                            autoFocus
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Col sm>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            
                        />
                    </Col>
                </Form.Group>
                <br/>

                <div className="d-grid gap-1">
                    <Button variant="secondary" type="submit" >
                        Sign In
                    </Button>
                </div>
            </Form>
        </Container>
        </div>
    );
};

export default Login;