import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TodoList from './TodoList';
import TodoModel from './TodoModel';

const Board = () => {
    const [todos, onInsert, onAppendTodoList] = TodoModel();
    console.log("before ");
    console.log(todos);
    
    useEffect( () => {
        fetch("/api/board/list", {
            method : 'get'            
        })
        .then(response => response.json())
        .then(result => {
            console.log("[Board.js] result > ");
            console.log(result);
            onAppendTodoList(result.list);
        });

        console.log("[Board.js] finish > ");    
        console.log({todos});            
        
    }, []);

    return (
        <div>
            Board    
            <p><Link  to='/board/insert'>글쓰기</Link></p>        
            
            <p>리스트</p>
            <TodoList todos={todos} />  
                      
        </div>
    );
};

export default Board;