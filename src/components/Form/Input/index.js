import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

function Input({ children, ...properties }) {
  return (
    <Styled.Input
      width={properties.width}
      bgColor={properties.bgColor}
      border={properties.border}
    />
  );
}

Input.propTypes = {
  children: PropTypes.any,
};

Input.defaultProps = {
  children: null,
};

export default Input;
