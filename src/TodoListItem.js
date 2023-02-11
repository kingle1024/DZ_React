import React from 'react';

const TodoListItem = ({todo}) => {
    const {title} = todo;
    console.log("todoListItem");
    console.log(todo);
    return (
        <div>        
            <div className='text'>{title}</div>                        
        </div>
    );
};

export default TodoListItem;