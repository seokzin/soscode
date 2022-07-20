import React from 'react';
import { Router, Route, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { ToDoListProvider } from 'Contexts';
import { Detail } from './index';

describe('<Detail />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    history.push('/detail/0');
    localStorage.setItem('ToDoList', '["ToDo 1"]');

    const { container } = render(
      <ToDoListProvider>
        <Router history={history}>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Router>
      </ToDoListProvider>,
    );

    const toDoItem = screen.getByText('ToDo 1');
    expect(toDoItem).toBeInTheDocument();

    const button = screen.getByText('삭제');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('deletes ToDo data', () => {
    const history = createMemoryHistory();
    history.push('/');
    history.push('/detail/0');
    localStorage.setItem('ToDoList', '["ToDo 1"]');

    const TestComponent = () => {
      const { pathname } = useLocation();
      return <div>{pathname}</div>;
    };

    render(
      <ToDoListProvider>
        <Router history={history}>
          <TestComponent />
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Router>
      </ToDoListProvider>,
    );

    const url = screen.getByText('/detail/0');
    expect(url).toBeInTheDocument();

    const toDoItem = screen.getByText('ToDo 1');
    expect(toDoItem).toBeInTheDocument();
    const button = screen.getByText('삭제');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(url.textContent).toBe('/');
    expect(toDoItem).not.toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});
