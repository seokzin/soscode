import React, { Component } from 'react';
import Styled from 'styled-components';

const InputBox = Styled.input`
  flex: 1;
  font-size: 16px;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  outline: none;
`;

interface Props {
  readonly placeholder?: string;
  readonly value?: string;
  readonly onChange?: (text: string) => void;
}

export class Input extends Component<Props> {
  render() {
    const { placeholder, value, onChange } = this.props;
    return (
      <InputBox
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          if (onChange) {
            onChange(event.target.value);
          }
        }}
      />
    );
  }
}
