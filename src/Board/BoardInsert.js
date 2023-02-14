import React, { useCallback, useState, useRef } from 'react';
import BoardModel from './BoardModel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

const BoardInsert = () => {
    const [todos, onAppendTodoList, onInsert ] = BoardModel();
    
    const inputEl = useRef(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onInsert_Click = useCallback (e => {
        e.preventDefault();
        console.log("[BoardInsert.js] ");
        console.log("title > ", title, content);
        onInsert(title, content);
        console.log("[BoardInsert.js] insert");
    }, [title, content]);

    const onChange = useCallback(e => {
        setTitle(e.target.value);
    }, []);
    const onChangeContent = useCallback(e => {
        setContent(e.target.value);
    }, []);
    
    return (
        <div>
            <h1>글쓰기</h1>
            <form onSubmit={onInsert_Click}>
            <InputGroup className="mb-3">                
                <InputGroup.Text>제목</InputGroup.Text>
                <Form.Control 
                    aria-label="Dollar amount (with dot and two decimal places)" 
                    value={title}
                    onChange={onChange}
                    ref={inputEl}
                />
            </InputGroup>
            <FloatingLabel controlId="floatingTextarea2" label="글 내용">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                value={content}
                onChange={onChangeContent}    
                />
            </FloatingLabel>
                <br/>

                <Button type="submit" variant="primary">글 추가</Button>
            </form>
        </div>
    );
};

export default BoardInsert;