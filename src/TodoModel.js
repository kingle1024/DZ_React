import { useReducer } from "react";

const TODO_ACTION = {
    INSERT : 2,
    APPEND_TODO_LIST : 4
}
Object.freeze(TODO_ACTION);

function todoReducer(todos, action){
    switch(action.type){
        case TODO_ACTION.INSERT :
            return todos.concat(action.todo);            
        case TODO_ACTION.APPEND_TODO_LIST :
            console.log("[todoModel.js] > ");
            console.log(action.todos);
            return todos.concat(action.todos);
        
        default :
            return todos;
    }
}

export default function TodoModel() {
    console.log("[TodoModel.js] export TodoModel > ");
    const [todos, dispatch] = useReducer(todoReducer, []);

    const onInsert = (title, content) => {
        console.log("[TodoModel.js] onInsert")
        console.log("title > ",title);
        fetch('/api/board/insert.do',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json; charset=UTF-8'},
            body : JSON.stringify({
                title : title, content : content
            })
        }).then(response => response.json())
        .then(result => {
            if(result.status === true){
                console.log(result);
                const board = result.board;
                dispatch({
                    type : TODO_ACTION.INSERT,
                    todos : {
                        id : board.id,
                        title : board.title,
                        content : board.content
                    }
                });
                alert('성공');
                window.location.href="/board";
            }
        });
    }

    const onAppendTodoList = todoList => {
        console.log("[TodoModel.js] onAppendTodoList")
        dispatch({type : TODO_ACTION.APPEND_TODO_LIST, todos : todoList});
    }
    return [todos, onInsert, onAppendTodoList];
}