import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Loding from './component/Loding';
import TodoHead from './component/TodoHead';
import TodoTemplate from './component/TodoTemplate';
import DoneList from './component/DoneList'


function App() {
  return (
    <>
      <TodoTemplate>템플렛을 만들자!</TodoTemplate>
    </>
  );
}

export default App;