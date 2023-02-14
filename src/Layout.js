import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {        
    const [isLogin, setIsLogin] = useState(false);
    useEffect( () => {
        const Authorization = localStorage.getItem("Authorization");
        if(Authorization.length > 1){            
            setIsLogin(true);
        }
    }, [isLogin]);

    const style = {
        alignItems : 'center'
    }

    return (
        <>
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/"><img width={150} src='https://www.douzone.com/html/images/img_positive@2x.png' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">                
            <Nav className="me-auto" style={style}>
                <Nav.Link href="/">Home</Nav.Link>
                
                { isLogin ? (
                    <>
                    <Nav.Link href="/board">게시판</Nav.Link>
                    <Nav.Link href="/member/info">내정보</Nav.Link>        
                    <div>안녕하세요 <b>{localStorage.getItem("userName")}</b>님!</div>
                    
                    <Nav.Link href="/logout" ><button className="btn btn-warning btn-xs">로그아웃</button></Nav.Link>
                    </>
                ) : (
                    <>
                    <Nav.Link href="/login"><button className="btn btn-warning btn-xs">로그인</button></Nav.Link>
                    <Nav.Link href="/signup"><button className="btn btn-warning btn-xs">회원가입</button></Nav.Link>
                    </>
                )
                }           
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <main>
             <Outlet />
        </main>
        </>
    );
};

export default Layout;