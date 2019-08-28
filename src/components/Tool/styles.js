import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  background-color: ${colors.white};
  border: 1px solid ${colors.mostDarkestWhite};
  border-radius: 5px;
  margin: 20px 5px;
  padding: 5px;
  max-width: 600px;
  min-width: 300px;
  transition: 0.3s;

  :hover {
    box-shadow: 0px 10px 10px 0.1px rgba(0,0,0,0.2);
  }
`;

export const Title = styled.h5`
  margin: 10px 5px;
`;

export const Description = styled.p`
  margin: 10px 5px;
  color: ${colors.lightInk};
`;

export const Tags = styled.ul`
  display: flex;
  flex-flow: wrap;
  list-style: none;
  margin-top: 20px;
  padding: 5px;
  text-transform: uppercase;

  li {
    font-weight: bold;
    margin-right: 10px;
  }
`;

export const DeleteTool = styled.i`
  position: absolute;
  display: flex;
  align-items: center;
  color: ${colors.ink};
  cursor: pointer;
  right: 10px;
  top: 10px;

  > span {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 400;
  }
`;
