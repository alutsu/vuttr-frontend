import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

function FontIcon({ text, ...properties }) {
  return (
    <>
      <Styled.Icon {...properties} >
        { !!text ? ` ${text}` : '' }
      </Styled.Icon>
    </>
  )
}

FontIcon.propTypes = {
  text: PropTypes.string
}

FontIcon.defaultProps = {
  text: null
}

export default FontIcon
