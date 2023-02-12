import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';

const TodoList = ({todos}) => {
    console.log("[TodoList.js] todoList > ");
    console.log({todos});
    const rowRenderer = useCallback(
        ({index, key}) => {
            const todo = todos[index];
            console.log("[TodoList.js] rowRender >");
            return (
                <TodoListItem
                    todo = {todo}
                    key = {todo.id}
                />
            );
        },[todos]
    )

    return (
        <div>            
            <List
                className='TodoList'
                width={492}
                height={513}
                rowCount={todos.length}
                rowHeight={37}
                rowRenderer={rowRenderer}
                list={todos}                
            />
        </div>
    );
};

export default TodoList;