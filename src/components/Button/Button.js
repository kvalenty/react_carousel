import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => (
  <button
    type="button"
    onClick={props.clickAction}
  >
    {props.action}
  </button>
);

Button.propTypes = {
  clickAction: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
};
