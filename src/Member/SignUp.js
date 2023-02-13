import React, { useState } from 'react';
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const SignUp = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');

    const onSignup = (e) => {
        console.log('onSignup');
        e.preventDefault();
        
        fetch('/api/signup', {
            method : 'post',
            headers : {'Content-Type' : 'application/json; charset=UTF-8'},
            body : JSON.stringify({
                userId : id,
                pwd : pwd,
                name : name
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if(result.status){
                alert('회원가입 완료');
                window.location.href ='/login';
            }else{
                alert('회원가입 실패');
            }
        });
    };

    return (
        <Container className="panel">
        <h3>회원가입</h3>
        <Form onSubmit={onSignup}>
            <Form.Group as={Row} className="mb-3" controlId='id'>
                <Col sm>
                    <Form.Control
                        placeholder='아이디'    
                        onChange={(e) => setId(e.target.value)}
                        autoFocus                    
                    />
                </Col>                
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId='pwd'>
                <Col sm>
                    <Form.Control
                        placeholder='비밀번호'      
                        type='password'           
                        onChange={(e) => setPwd(e.target.value)}       
                    />                    
                </Col>                
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId='name'>
                <Col sm>
                    <Form.Control                    
                        placeholder='이름'                        
                        onChange={(e) => setName(e.target.value)}
                    />                    
                </Col>                
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId='signup'>
                <Col sm>
                    <button onClick={onSignup}>회원가입</button>                 
                </Col>                
            </Form.Group>
        </Form>
            
        </Container>
        
    );
};

export default SignUp;