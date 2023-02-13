import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Layout = () => {        
    const [isLogin, setIsLogin] = useState(false);
    useEffect( () => {
        const Authorization = localStorage.getItem("Authorization");
        if(Authorization.length > 1){            
            setIsLogin(true);
        }
    }, [isLogin]);

    return (
        <div>
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">                
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                
                { isLogin ? (
                    <>
                    <Nav.Link href="/board">게시판</Nav.Link>
                    <Nav.Link href="/member/info">내정보</Nav.Link>                 
                    <Nav.Link href="/logout"><button className="btn btn-warning btn-xs">로그아웃</button></Nav.Link>
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
        </div>

        // <div>
        //     레이아웃
        //     <header>                                
        //         <button onClick={logout}>로그아웃</button>
        //         <Link to="/" >홈</Link>
        //         <Link to='/info'>내정보</Link>
        //     </header>
        //     <main>
        //         <Outlet />
        //     </main>
        // </div>
    );
};

export default Layout;