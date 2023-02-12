import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BoardModel from './BoardModel';


const BoardView = ({id}) => {
    const [todos, onAppendTodoList, onInsert, onEdit, onDelete] = BoardModel();
     
    const [boardDetail, setBoardDetail] = useState([]);
    console.log("boardDetail > ");
    console.log(boardDetail);
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
            onEdit(boardDetail, localContent, localTitle);
            setIsEditNow(false);                        
        }
    }
    const handleClickDelete = () => {
        onDelete(boardDetail.id);
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
                    <button onClick={handleClickEdit}>수정 완료</button>
                </div>
            ) : (
                <div>
                    <button onClick={toggleIsEditNow}>수정 하기</button>
                    <button onClick={handleClickDelete}>삭제 하기</button>
                </div>
            )}
            
        </div>
    );
};

export default BoardView;