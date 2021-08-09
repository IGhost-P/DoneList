import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Loding from './component/Loding';
import TodoHead from './component/TodoHead';
import TodoInsert from './component/TodoInsert';
import TodoTemplate from './component/TodoTemplate';
import TodoList from './component/TodoList';


function App() {
  return (
    <>
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;