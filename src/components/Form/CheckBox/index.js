import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/destructuring-assignment
      checkedState: this.props.checked,
    };
  }

  handleChange = async ({ target }) => {
    await this.setState({ checkedState: target.checked });
  }

  render() {
    const {
      id, name, label, onChange, disabled,
    } = this.props;

    const { checkedState } = this.state;

    return (
      <Styled.CheckBoxContainer>
        <input
          type="checkbox"
          id={id || name}
          name={name}
          checked={checkedState}
          onChange={this.handleChange}
          disabled={disabled}
        />
        <span disabled={disabled}>
          {label}
        </span>
      </Styled.CheckBoxContainer>
    );
  }
}

CheckBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

CheckBox.defaultProps = {
  id: null,
  onChange: () => {},
};

export default CheckBox;
