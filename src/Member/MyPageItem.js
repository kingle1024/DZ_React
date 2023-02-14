import React, { useEffect, useState } from 'react';

const MyPageItem = () => {
    const [isEditNow, setIsEditNow] = useState(false);
    const [user, setUser] = useState({
        'userId' : '',
        'name' : '',
    });
    useEffect( () => {
        fetch('/api/member/info', {
            method : 'post',
            headers : {'Content-Type' : 'application/json; charset=UTF-8'},
            body : JSON.stringify({
                userId : localStorage.getItem("userId")
            })
        })
        .then(response => response.json())
        .then(result => {
            setUser({
                'userId' : result.info.userId,
                'name' : result.info.name
            });
        });
    }, []);
    

    const toggleIsEditNow = () => {
        setIsEditNow(false);
    }

    return (
        <>
            <thead></thead>
            <tbody>
            {isEditNow ? (
                <>
                    <tr>
                        <th>아이디</th>
                    <td>
                        <input 
                            value = {user.userId}
                        />  
                    </td>
                    </tr>                  
                    <p>{user.name}</p>
                    <button onClick={toggleIsEditNow}>수정완료</button>
                    <button onClick={(e) => setIsEditNow(false)}>수정취소</button>
                </>
            ): (
                <>
                <tr>
                    <th width={150}>아이디</th>
                    <td>{user.userId}</td>
                </tr>
                <tr>
                    <th>이름</th>
                    <td>{user.name}</td>
                </tr>
                </>
            )                
            }
            </tbody>
        </>
    );
};

export default MyPageItem;