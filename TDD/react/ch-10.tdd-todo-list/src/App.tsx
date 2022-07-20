import React from 'react';
import Styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import { PageHeader } from 'Components';
import { List, Add, Detail, NotFound } from 'Pages';

const Container = Styled.div`
  min-height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <PageHeader />
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
