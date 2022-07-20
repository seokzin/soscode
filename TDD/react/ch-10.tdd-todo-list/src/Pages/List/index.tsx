import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from 'Components';

const Container = Styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  align-items: center;
`;
const ToDoItem = Styled.div`
  display: flex;
  border-bottom: 1px solid #BDBDBD;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;
const Label = Styled(Link)`
  flex: 1;
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;
`;
const ToDoList = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
`;
const AddButton = Styled(Link)`
  font-size: 20px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  cursor: pointer;
  position: absolute;
  bottom: -30px;
  background-color: #304FFE;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  &:hover {
    background-color: #1E40FF;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const List = () => {
  const [toDoList, setToDoList] = useState<Array<string>>([]);

  const onDelete = (index: number) => {
    let list = [...toDoList];
    list.splice(index, 1);
    setToDoList(list);
    localStorage.setItem('ToDoList', JSON.stringify(list));
  };

  useEffect(() => {
    const list = localStorage.getItem('ToDoList');
    if (list) {
      setToDoList(JSON.parse(list));
    }
  }, []);

  return (
    <Container>
      <ToDoList>
        {toDoList.map((todo, index) => (
          <ToDoItem key={todo}>
            <Label to={`/detail/${index}`}>{todo}</Label>
            <Button
              label="삭제"
              backgroundColor="#FF1744"
              hoverColor="#F01440"
              onClick={() => onDelete(index)}
            />
          </ToDoItem>
        ))}
      </ToDoList>
      <AddButton to="/add">+</AddButton>
    </Container>
  );
};
