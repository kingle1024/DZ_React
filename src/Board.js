import React, { useEffect } from 'react';
import TodoList from './TodoList';
import TodoModel from './TodoModel';

const Board = () => {
    const [todos, onAppendTodoList] = TodoModel();
    console.log("before ");
    console.log(todos);
    
    useEffect( () => {
        fetch("/api/board/list", {
            method : 'get'            
        })
        .then(response => response.json())
        .then(result => {
            console.log("result > ");
            console.log(result);
            onAppendTodoList(result.list);
        });

        console.log("finish");    
        console.log({todos});            
        
    }, []);

    return (
        <div>
            Board
            
            <TodoList todos={todos} />
            
        </div>
    );
};

export default Board;