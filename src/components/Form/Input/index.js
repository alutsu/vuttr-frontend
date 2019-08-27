import React from 'react'

import * as Styled from './styles';

function Input({ children, ...properties }) {
  return (
    <Styled.InputContainer>
      <Styled.InputIcon>
        { children }
      </Styled.InputIcon>
      <Styled.Input {...properties }/>
    </Styled.InputContainer>
  )
}

export default Input
