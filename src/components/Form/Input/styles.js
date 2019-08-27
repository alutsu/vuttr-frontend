import styled from 'styled-components';

import colors from './../../../styles/colors';

export const Input = styled.input`
  width: ${ props => `${props.width}px` || '300px' };
  height: 35px;
  background-color: ${colors.darkerWhite};
  border: 2px solid ${colors.darkWhite};
  padding: 10px;
  border-radius: 5px;
  margin: 10px 5px;

  :focus {
    border: 2px solid ${colors.blue};
  }
`;