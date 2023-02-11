import React from 'react';
import { NavLink } from 'react-router-dom';

const Articles = ({id}) => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink
                        to={`/view/${id}`}
                    >
                        게시글 {id}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Articles;