import React, { useState, useRef, useCallback } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoInsert from './component/Donecomponent/TodoInsert';
import TodoTemplate from './component/Donecomponent/TodoTemplate';
import TodoList from './component/Donecomponent/TodoList';
import Done from './component/Donecomponent/Done';


function DoneList() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리엑트의 기초 알아보기',
            checked: true,
        },
        {
            id: 2,
            text: '컴포넌트 스타일링 해보기',
            checked: true,
        },
        {
            id: 3,
            text: '일정 관리 앱 만들어 보기',
            checked: false,
        },
    ])

    const nextId = useRef(4);
    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo));
            nextId.current += 1;
        },
        [todos],
    )

    const onRemove = useCallback(
        id => {
            setTodos(todos.filter(todo => todo.id !== id));
        },
        [todos],
    )

    const onToggle = useCallback(
        id => {
            setTodos(
                todos.map(todo =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo,
                ),
            );
        },
        [todos],
    )

    const onDone = useCallback(
        () => {
            const Data = [...todos];
            setTodos(todos.filter(todo => todo.text === true))

            // 해당 데이터를 JSON 형식으로 파이어베이스에 보내서, 캘린더에서 사용할수 있게 만들어보자
            console.log(Data)
        },
        [todos],
    )

    return (
        <>


            <TodoTemplate>
                <TodoInsert onInsert={onInsert} />
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} /> {/* todos에 위에 만든 리스트를 넣어주자 */}
                <Done onDone={onDone} />
            </TodoTemplate>

        </>
    );
}

export default DoneList;