import React from 'react';
import { Link, NavLink, Routes } from 'react-router-dom';
import Table from 'react-bootstrap/Table';


const BoardListItem = ({todo, style}) => {

    return (        
        <>
        <tr>
            <td>{todo.id}</td>
            <td>
                <NavLink to={`/board/view/${todo.id}`}>
                    {todo.title}        
                </NavLink>
            </td>                        
        </tr> 
        </>
    );
};

export default BoardListItem;