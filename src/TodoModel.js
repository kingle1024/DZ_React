import { useReducer } from "react";

const TODO_ACTION = {
    APPEND_TODO_LIST : 4
}
Object.freeze(TODO_ACTION);

function todoReducer(todos, action){
    switch(action.type){
        case TODO_ACTION.APPEND_TODO_LIST:
            return todos.concat(action.todos);
        default :
            return todos;
    }
}

export default function TodoModel() {
    const [todos, dispatch] = useReducer(todoReducer, []);

    const onAppendTodoList = todoList => {
        dispatch({type : TODO_ACTION.APPEND_TODO_LIST, todos : todoList});        
    }
    return [todos, onAppendTodoList];
}