import React, { Component } from 'react';
import Styled from 'styled-components';

import { Button } from 'Components/Button';

const Container = Styled.div`
  display: flex;
  border-bottom: 1px solid #BDBDBD;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;
const Label = Styled.div`
  flex: 1;
  font-size: 16px;
  margin-right: 20px;
`;

interface Props {
  readonly label: string;
  readonly onDelete?: () => void;
}

export class ToDoItem extends Component<Props> {
  render() {
    const { label, onDelete } = this.props;
    return (
      <Container>
        <Label>{label}</Label>
        <Button label="삭제" backgroundColor="#FF1744" hoverColor="#F01440" onClick={onDelete} />
      </Container>
    );
  }
}
