import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { List } from 'react-virtualized';


const BoardView = ({id}) => {
    // const [onEdit] = BoardModel();
     
    const [boardDetail, setBoardDetail] = useState([]);
    const params = useParams();    
    const [isEditNow, setIsEditNow] = useState(false);
    
    const [localTitle, setLocalTitle] = useState(boardDetail.title);
    const [localContent, setLocalContent] = useState(boardDetail.content);        

    const localContentRef = useRef(null);
    
    useEffect( () => {
        fetch(`/api/board/view/${params.id}`, {
            method : 'get'
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);        
            setBoardDetail(result.view);
        });    
    }, []);        
    
    const handleClickEdit = () => {
        if(window.confirm(`수정하시겠습니까?`)){
            // onEdit(boardDetail, localContent, localTitle);
        }
    }
    const toggleIsEditNow = () => {
        setIsEditNow(!isEditNow);
        setLocalTitle(boardDetail.title);
        setLocalContent(boardDetail.content);
    }
    const handleQuitEdit = () => {
        setLocalContent(boardDetail.content);
        setLocalTitle(boardDetail.title);

        toggleIsEditNow();
    }    

    return (
        <div>
            <h3>BoardView</h3>
            <Link to='/board'><button>목록</button></Link>
            
            {isEditNow ? (
                <div>                
                    <input
                        value={localTitle}
                        onChange={(e) => setLocalTitle(e.target.value)}
                    /><br/>
                    <textarea        
                        ref={localContentRef}                
                        value={localContent}
                        onChange={(e) => setLocalContent(e.target.value)}
                    />
                </div>
            ) : (
                <div>
                    <p>{boardDetail.title}</p>
                    <p>{boardDetail.content}</p>
                </div>
            )}            

            {isEditNow ? (
                <div>
                    <button onClick={handleQuitEdit}>수정 취소</button>                    
                </div>
            ) : (
                <div>
                    <button onClick={toggleIsEditNow}>수정 하기</button>
                </div>
            )}
            
        </div>
    );
};

export default BoardView;