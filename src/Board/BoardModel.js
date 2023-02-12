import { useReducer } from "react";

const TODO_ACTION = {
    INSERT : 2,
    EDIT : 3,
    APPEND_TODO_LIST : 4,
    DELETE : 5
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

export default function BoardModel() {
    console.log("[BoardModel.js] export BoardModel > ");
    const [todos, dispatch] = useReducer(todoReducer, []);

    const onInsert = (title, content) => {
        console.log("[BoardModel.js] onInsert")
        console.log("title > ",title);
        fetch('/api/board/insert.do',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json; charset=UTF-8'},
            body : JSON.stringify({
                title : title, 
                content : content
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

    const onEdit = (boardDetail, localContent, localTitle) => {
        console.log("[BoardModel.js] onEdit");
        fetch('/api/board/edit.do', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json; charset=UTF-8'},
            body : JSON.stringify({
                id : boardDetail.id,
                title : localTitle,
                content : localContent
            })
        }).then(response => response.json())
        .then(result => {
            console.log(result);
            const board = result.board;
            dispatch({
                type : TODO_ACTION.EDIT,
                todos : {
                    id : board.id,
                    title : board.title,
                    content : board.content
                }                
            });
            window.location.href="/board/view/"+board.id;
        });        
    }

    const onAppendTodoList = todoList => {
        console.log("[BoardModel.js] onAppendTodoList")
        dispatch({type : TODO_ACTION.APPEND_TODO_LIST, todos : todoList});
    }

    const onDelete = id => {
        if(!window.confirm('삭제하시겠습니까?')) return;
        
        fetch('/api/board/delete.do?id='+id, {
            method : 'get'
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        });

        dispatch({type : TODO_ACTION.DELETE, id});

        window.location.href = "/board";
    }

    return [todos, onAppendTodoList, onInsert, onEdit, onDelete];
}