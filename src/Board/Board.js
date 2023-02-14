import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BoardList from './BoardList';
import BoardModel from './BoardModel';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';

const Board = () => {
    const [todos, onAppendTodoList] = BoardModel();
    
    useEffect( () => {
        fetch("/api/board/list", {
            method : 'get'            
        })
        .then(response => response.json())
        .then(result => {
            onAppendTodoList(result.list);
        });
        
    }, []);

    return (
        <>            
            <h1>게시판</h1>
            <p className="text-end"><Link to='/board/insert'>글쓰기</Link></p>        
            <Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>제목</th>
                    </tr>
                </thead>                
                <BoardList todos={todos} />
            </Table>   
            </Row>
        </>
    );
};

export default Board;