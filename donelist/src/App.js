import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Loding from './component/Loding';
import TodoHead from './component/TodoHead';
import TodoTemplate from './component/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        {/* <TodoHead /> */}
        <Loding />
      </TodoTemplate>
    </>
  );
}

export default App;