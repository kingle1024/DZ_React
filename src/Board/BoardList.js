import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import BoardListItem from './BoardListItem';

const BoardList = ({todos}) => {
    console.log("[BoardList.js] todoList > ");
    console.log({todos});

    return (
        <>
            <thead>
                <tr>
                    <th>#</th>
                    <th>제목</th>
                </tr>
            </thead> 
            <tbody>
            {todos.map(todo => (
                <BoardListItem key={todo.id} todo={todo} />
            ))}
            </tbody>      
        </>
    );
};

export default BoardList;