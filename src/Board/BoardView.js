import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BoardModel from './BoardModel';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const BoardView = ({id}) => {
    const [todos, onAppendTodoList, onInsert, onEdit, onDelete] = BoardModel();
     
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
        <>
            <h1>게시글 상세보기</h1>
            
            <p className="text-end"><Link to='/board'>목록</Link></p>
            
            <Table striped bordered hover>
            {isEditNow ? (
                <>
                <tr>                
                    <td width={180}>제목</td>
                    <td>
                        <input
                            value={localTitle}
                            onChange={(e) => setLocalTitle(e.target.value)}
                        />
                    </td>
                </tr>
                <tr>                 
                    <td>내용</td>   
                    <td>
                    <textarea        
                        ref={localContentRef}                
                        value={localContent}
                        onChange={(e) => setLocalContent(e.target.value)}
                    />
                    </td>
                </tr>
                </>
            ) : (
                <>
                    <tr>
                        <th width={180}>제목</th>
                        <td>{boardDetail.title}</td>
                    </tr>
                    <tr>
                        <th >내용</th>
                        <td>{boardDetail.content}</td>
                    </tr>
                </>
            )}
            
            

            {isEditNow ? (
                <div className="text-end">
                    <br/>
                    
                    <Button onClick={handleQuitEdit}>수정 취소</Button>&nbsp;
                    <Button onClick={handleClickEdit}>수정 완료</Button>
                    
                </div>
            ) : (
                <div className="text-end">
                    <br/>
                    
                    <Button variant="primary" onClick={toggleIsEditNow}>수정 하기</Button>&nbsp;
                    <Button variant="danger" onClick={handleClickDelete}>삭제 하기</Button>
                    
                </div>
            )}
            </Table>
        </>
    );
};

export default BoardView;