import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

function Tool({ title, description, tags }) {
  return (
    <Styled.Container>
      <Styled.DeleteTool className="fas fa-times">
        <span>Remove</span>
      </Styled.DeleteTool>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Tags>
        {
          tags.map((tag) => <li>#{tag}</li>)
        }
      </Styled.Tags>
    </Styled.Container>
  );
}

Tool.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default Tool;
