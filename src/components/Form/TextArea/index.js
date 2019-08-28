import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = async ({ target }) => {
    await this.setState({ value: target.value });
  }

  render() {
    const { rows, cols } = this.props;
    const { value } = this.state;

    return (
      <Styled.TextArea rows={rows} cols={cols}>
        { value }
      </Styled.TextArea>
    );
  }
}

TextArea.propTypes = {
  rows: PropTypes.string,
  cols: PropTypes.string,
};

TextArea.defaultProps = {
  rows: null,
  cols: null,
};

export default TextArea;
