import React from 'react';

import Button from './components/Button';
import FontIcon from './components/FontIcon';
import Input from './components/Form/Input';
import SearchBox from './components/SearchBox';
import TextArea from './components/Form/TextArea';
import Tool from './components/Tool';
import CheckBox from './components/Form/CheckBox';

import GlobalStyle from './styles/globals';

function App() {
  return (
    <div>
      <GlobalStyle />
      <h1>Hello</h1>
      <Button>
        <FontIcon className="fas fa-plus" text="Adicionar" />
      </Button>
      <br />
      <Input width="150" />
      <br />
      <CheckBox label="Tags" disabled />
      <br />
      <SearchBox />
      <br />
      <TextArea rows="5" cols="25" />

      <Tool
        title="Teste de Titulo"
        description="Loremd doiuahsd ioaudsiou hdaoidh aoiduh saiuhdas ioudhas
        iduhsa diuhsadi ouhsadio uhadoiuh aoisuhdasio uhasio hdsaoiudh"
        tags={['tag1', 'tag2', 'tag3']}
      />


    </div>
  );
}

export default App;
