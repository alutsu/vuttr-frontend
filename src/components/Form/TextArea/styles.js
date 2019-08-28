import styled from 'styled-components';

import colors from '../../../styles/colors';

export const TextArea = styled.textarea`
  background-color: ${(props) => props.bgColor || `${colors.darkerWhite}`};
  border: ${(props) => props.border || `2px solid ${colors.mostDarkestWhite}`};
  padding: 10px;
  border-radius: 5px;
  margin: 10px 5px;
  resize: none;

  :focus {
    background-color: ${colors.darkestWhite};
  }
`;
