import styled from 'styled-components';

import colors from '../../styles/colors';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.darkWhite};
  border-radius: 5px;
  border: 1px solid ${colors.mostDarkestWhite};
  padding: 5px;
  width: ${(props) => `${props.width ? props.width : '300px'}`};

  > i {
    font-weight: bold;
    color: ${colors.mostDarkestWhite};
  }

  > input {
    border: none;
    background-color: ${colors.darkWhite};
    margin-left: 8px;
    width: 100%;
  }

  :focus-within {
    background-color: ${colors.darkestWhite}
  }

  > input:focus {
    background-color: ${colors.darkestWhite}
  }
`;
