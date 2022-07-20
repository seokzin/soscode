import React from 'react';
import Styled from 'styled-components';

import { ToDoListProvider } from 'Contexts';
import { InputContainer, ToDoList } from 'Components';

const Container = Styled.div`
  min-height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Contents = Styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

function App() {
  return (
    <ToDoListProvider>
      <Container>
        <Contents>
          <ToDoList />
          <InputContainer />
        </Contents>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
