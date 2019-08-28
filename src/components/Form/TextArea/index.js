import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  handleChange = async ({ target }) => {
    await this.setState({ searchValue: target.value });
  }

  render() {
    const { width } = this.props;
    const { searchValue } = this.state;

    return (
      <Styled.SearchContainer width={width}>
        <i className="fas fa-search" />
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={this.handleChange}
        />
      </Styled.SearchContainer>
    );
  }
}

TextArea.propTypes = {
  width: PropTypes.string,
};

TextArea.defaultProps = {
  width: null,
};

export default TextArea;
