import React, { useState } from 'react';
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
  return (
    <>
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos} /> {/* todos에 위에 만든 리스트를 넣어주자 */}
      </TodoTemplate>
    </>
  );
}

export default App;