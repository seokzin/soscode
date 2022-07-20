import React from 'react';
import { Router, Route, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { Detail } from './index';

describe('<Detail />', () => {
  it('renders component correctly', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2"]');

    const history = createMemoryHistory();
    history.push('/detail/1');

    const { container } = render(
      <Router history={history}>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Router>,
    );

    const toDoItem = screen.getByText('ToDo 2');
    expect(toDoItem).toBeInTheDocument();

    const button = screen.getByText('삭제');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('redirect to Not Found page if todo id is wrong', () => {
    localStorage.clear();
    const history = createMemoryHistory();
    history.push('/detail/1');

    const TestComponent = (): JSX.Element => {
      const { pathname } = useLocation();
      return <div>{pathname}</div>;
    };

    render(
      <Router history={history}>
        <TestComponent />
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Router>,
    );

    const url = screen.getByText('/404');
    expect(url).toBeInTheDocument();
  });

  it('delete a ToDo and redirect to the List page', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2"]');

    const history = createMemoryHistory();
    history.push('/detail/1');

    const TestComponent = (): JSX.Element => {
      const { pathname } = useLocation();
      return <div>{pathname}</div>;
    };

    render(
      <Router history={history}>
        <TestComponent />
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Router>,
    );

    const url = screen.getByText('/detail/1');
    expect(url).toBeInTheDocument();

    const button = screen.getByText('삭제');
    fireEvent.click(button);

    expect(JSON.parse(localStorage.getItem('ToDoList') as string)).not.toContain('ToDo 2');
    expect(url.textContent).toBe('/');
  });
});
