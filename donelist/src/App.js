import React, { useState, useRef, useCallback } from 'react';
import { createGlobalStyle } from 'styled-components';
import Loding from './component/Loding';
import TodoHead from './component/TodoHead';
import TodoInsert from './component/TodoInsert';
import TodoTemplate from './component/TodoTemplate';
import TodoList from './component/TodoList';


function App() {
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
  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} /> {/* todos에 위에 만든 리스트를 넣어주자 */}
      </TodoTemplate>
    </>
  );
}

export default App;