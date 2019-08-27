import React from 'react';

import Button from './components/Button';
import FontIcon from './components/FontIcon';
import Input from './components/Form/Input';

import GlobalStyle from './styles/globals';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <h1>Hello</h1>
      <Button >
        <FontIcon className="fas fa-plus" text="Adicionar"/>
      </Button>
      <br/>
      <Input width="150"></Input>
    </div>
  );
}

export default App;
