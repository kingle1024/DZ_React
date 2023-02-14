import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

const BoardList = ({todos}) => {
    console.log("[BoardList.js] todoList > ");
    console.log({todos});

    return (
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.id}>
                        <td >{todo.id}</td>
                        <td>
                            <NavLink to={`/board/view/${todo.id}`}>
                                {todo.title}        
                            </NavLink>
                        </td>                        
                    </tr>
                ))}

            </tbody>      
    );
};

export default BoardList;