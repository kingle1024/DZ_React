import React from 'react';

const Logout = () => {
    localStorage.setItem("Authorization", '');
    window.location.href='/login';    
    
    return (
        <>
        </>
    );
};

export default Logout;