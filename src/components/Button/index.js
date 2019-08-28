import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

function Button({ children }) {
  return (
    <Styled.Button>
      { children }
    </Styled.Button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
};

Button.defaultProps = {
  children: null,
};

export default Button;
