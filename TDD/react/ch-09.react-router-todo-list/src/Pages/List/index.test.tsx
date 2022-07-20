import React from 'react';
import { Router, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { ToDoListProvider } from 'Contexts';
import { List } from './index';

describe('<List />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    history.push('/');

    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    const { container } = render(
      <ToDoListProvider>
        <Router history={history}>
          <List />
        </Router>
      </ToDoListProvider>,
    );

    const toDoItem1 = screen.getByText('ToDo 1');
    expect(toDoItem1).toBeInTheDocument();
    expect(toDoItem1.getAttribute('href')).toBe('/detail/0');

    const toDoItem2 = screen.getByText('ToDo 2');
    expect(toDoItem2).toBeInTheDocument();
    expect(toDoItem2.getAttribute('href')).toBe('/detail/1');

    const toDoItem3 = screen.getByText('ToDo 3');
    expect(toDoItem3).toBeInTheDocument();
    expect(toDoItem3.getAttribute('href')).toBe('/detail/2');

    expect(screen.getAllByText('삭제').length).toBe(3);

    const addButton = screen.getByText('+');
    expect(addButton).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('deletes toDo item', () => {
    const history = createMemoryHistory();
    history.push('/');

    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    render(
      <ToDoListProvider>
        <Router history={history}>
          <List />
        </Router>
      </ToDoListProvider>,
    );

    const toDoItem = screen.getByText('ToDo 2');
    expect(toDoItem).toBeInTheDocument();
    fireEvent.click(toDoItem.nextElementSibling as HTMLElement);
    expect(toDoItem).not.toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('ToDoList') as string)).not.toContain('ToDo 2');
  });

  it('moves to detail page', () => {
    const TestComponent = (): JSX.Element => {
      const { pathname } = useLocation();
      return <div>{pathname}</div>;
    };

    const history = createMemoryHistory();
    history.push('/');

    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    render(
      <ToDoListProvider>
        <Router history={history}>
          <TestComponent />
          <List />
        </Router>
      </ToDoListProvider>,
    );

    const url = screen.getByText('/');
    expect(url).toBeInTheDocument();

    const toDoItem1 = screen.getByText('ToDo 2');
    expect(toDoItem1.getAttribute('href')).toBe('/detail/1');
    fireEvent.click(toDoItem1);

    expect(url.textContent).toBe('/detail/1');
  });

  it('moves to add page', () => {
    const TestComponent = (): JSX.Element => {
      const { pathname } = useLocation();
      return <div>{pathname}</div>;
    };

    const history = createMemoryHistory();
    history.push('/');

    render(
      <ToDoListProvider>
        <Router history={history}>
          <TestComponent />
          <List />
        </Router>
      </ToDoListProvider>,
    );

    const url = screen.getByText('/');
    expect(url).toBeInTheDocument();

    const addButton = screen.getByText('+');
    fireEvent.click(addButton);

    expect(url.textContent).toBe('/add');
  });
});
