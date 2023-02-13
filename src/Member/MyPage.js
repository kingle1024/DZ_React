import React, { useEffect, useState } from 'react';

const MyPage = () => {
    const [isEditNow, setIsEditNow] = useState(false);

    const [user, setUser] = useState({
        'userId' : '',
        'name' : '',
    });
    useEffect( () => {
        fetch('/api/member/info', {
            method : 'get'
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
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
        <div>
            <h3>MyPage</h3>

            {isEditNow ? (
                <>
                    <p>
                    <input 
                        value = {user.userId}
                    />                    
                    </p>
                    <p>{user.name}</p>
                    <button onClick={toggleIsEditNow}>수정완료</button>
                    <button onClick={(e) => setIsEditNow(false)}>수정취소</button>
                </>
            ): (
                <>
                <p>{user.userId}</p>
                <p>{user.name}</p>
                <button onClick={(e) => setIsEditNow(true)}>수정하기</button>
                </>
            )                
            }
            
        </div>
    );
};

export default MyPage;