import styled from 'styled-components';

import colors from '../../../styles/colors';

export const CheckBoxContainer = styled.label`
  display: flex;
  position: relative;

  > input[type='checkbox'] {
    appearance: none;
    outline: 0;
    background-color: ${colors.darkestWhite};
    margin: 0px 15px;
    border-radius: 4px;
    width: 25px;
    height: 25px;

    :checked {
      background-color: ${colors.blue};
    }

    :disabled {
      opacity: 0.4;
    }
  }

  > input[type='checkbox']:disabled+label {
    color: ${colors.lighestInk};
    font-size: 30px;
  }
`;
