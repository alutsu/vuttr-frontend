import styled from 'styled-components';

import colors from '../../styles/colors';

export const Button = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
  width: 150px;

  :hover {
    background-color: ${colors.darkBlue};
  }
  
  :active {
    background-color: ${colors.darkerBlue};
  }
  
  :disabled {
    opacity: 0.4;
  }
  

`;
