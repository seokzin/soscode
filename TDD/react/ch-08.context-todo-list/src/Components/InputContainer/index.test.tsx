import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { ToDoListProvider } from 'Contexts';
import { InputContainer } from './index';

describe('<InputContainer />', () => {
  it('renders component correctly', () => {
    const { container } = render(<InputContainer />);

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    expect(input).toBeInTheDocument();
    const button = screen.getByText('추가');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('empties data after adding data', () => {
    render(<InputContainer />);

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요') as HTMLInputElement;
    const button = screen.getByText('추가');

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'study react 1' } });
    expect(input.value).toBe('study react 1');
    fireEvent.click(button);
    expect(input.value).toBe('');
  });

  it('adds input data to localStorage via Context', () => {
    render(
      <ToDoListProvider>
        <InputContainer />
      </ToDoListProvider>,
    );

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    const button = screen.getByText('추가');

    expect(localStorage.getItem('ToDoList')).toBeNull();

    fireEvent.change(input, { target: { value: 'study react 1' } });
    fireEvent.click(button);

    expect(localStorage.getItem('ToDoList')).toBe('["study react 1"]');
  });
});
