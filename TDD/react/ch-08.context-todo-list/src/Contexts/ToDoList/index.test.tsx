import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { ToDoListProvider, ToDoListContext } from './index';

beforeEach(() => {
  localStorage.clear();
});

describe('ToDoList Context', () => {
  it('renders component correctly', () => {
    const ChildComponent = () => {
      return <div>Child Component</div>;
    };
    render(
      <ToDoListProvider>
        <ChildComponent />
      </ToDoListProvider>,
    );

    const childComponent = screen.getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
    expect(localStorage.getItem('ToDoList')).toBeNull();
  });

  it('loads localStorage data and sets it to State', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    const ChildComponent = () => {
      const { toDoList } = useContext(ToDoListContext);
      return (
        <div>
          {toDoList.map((toDo) => (
            <div key={toDo}>{toDo}</div>
          ))}
        </div>
      );
    };
    render(
      <ToDoListProvider>
        <ChildComponent />
      </ToDoListProvider>,
    );

    expect(screen.getByText('ToDo 1')).toBeInTheDocument();
    expect(screen.getByText('ToDo 2')).toBeInTheDocument();
    expect(screen.getByText('ToDo 3')).toBeInTheDocument();
  });

  it('uses addToDo function', () => {
    const ChildComponent = () => {
      const { toDoList, addToDo } = useContext(ToDoListContext);
      return (
        <div>
          <div onClick={() => addToDo('study react 1')}>Add ToDo</div>
          <div>
            {toDoList.map((toDo) => (
              <div key={toDo}>{toDo}</div>
            ))}
          </div>
        </div>
      );
    };
    render(
      <ToDoListProvider>
        <ChildComponent />
      </ToDoListProvider>,
    );

    expect(localStorage.getItem('ToDoList')).toBeNull();
    const button = screen.getByText('Add ToDo');
    fireEvent.click(button);
    expect(screen.getByText('study react 1')).toBeInTheDocument();
    expect(localStorage.getItem('ToDoList')).toBe('["study react 1"]');
  });

  it('uses deleteToDo function', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    const ChildComponent = () => {
      const { toDoList, deleteToDo } = useContext(ToDoListContext);
      return (
        <div>
          {toDoList.map((toDo, index) => (
            <div key={toDo} onClick={() => deleteToDo(index)}>
              {toDo}
            </div>
          ))}
        </div>
      );
    };
    render(
      <ToDoListProvider>
        <ChildComponent />
      </ToDoListProvider>,
    );

    const toDoItem = screen.getByText('ToDo 2');
    expect(toDoItem).toBeInTheDocument();
    fireEvent.click(toDoItem);
    expect(toDoItem).not.toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('ToDoList') as string)).not.toContain('ToDo 2');
  });
});
