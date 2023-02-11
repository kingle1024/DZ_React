import React, { useState } from 'react';


const Login = () => {
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');

    const inputId = (e) => {
        setUserId(e.target.value);
    }

    const inputPwd = (e) => {
        setPwd(e.target.value);
    }

    const login = () => {
        fetch("/api/member/login", {
            method : 'POST',
            headers : {'Content-Type' : 'application/json; charset=UTF-8'},
            body : JSON.stringify({
                userId : userId,
                pwd : pwd
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
    }
    

    return (
        <div>
           로그인 <br/>
           아이디 
           <input 
            value={userId}
            onChange={inputId}
           /><br/>

           패스워드
           <input 
            value={pwd}
            onChange={inputPwd}
           /><br/>
           
           <button onClick={() => login()}>로그인</button>
        </div>
    );
};

export default Login;