import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';

const LoginValid = () => {
    useEffect( () => {
        const Authorization = localStorage.getItem("Authorization");
        
        if(Authorization.length < 1) {
            window.location.href='/login';
        }
    }, []);

    return (
        <div>
            <Container>
               <Outlet />
            </Container>
        </div>
    );
};

export default LoginValid;