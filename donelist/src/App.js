import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Loding from './component/Loding';
import TodoHead from './component/TodoHead';
import TodoTemplate from './component/TodoTemplate';
import DoneList from './component/DoneList'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      {/* <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <DoneList />
      </TodoTemplate> */}
      <Loding />
    </>
  );
}

export default App;