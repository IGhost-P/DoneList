import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Loding from './component/Loding';
import TodoHead from './component/TodoHead';
import TodoInsert from './component/TodoInsert';
import TodoTemplate from './component/TodoTemplate';


function App() {
  return (
    <>
      <TodoTemplate>TodoTemplate
        <TodoInsert />
      </TodoTemplate>
    </>
  );
}

export default App;