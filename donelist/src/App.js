import React from 'react';
import { createGlobalStyle } from 'styled-components';
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
        <TodoHead />
      </TodoTemplate>
    </>
  );
}

export default App;