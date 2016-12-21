import React, { Component, PropTypes } from 'react';
import importcss from 'importcss'

@importcss(require('./ControlLabel.css'))
export default class ControlLabel extends React.Component {

  render() {
    const { controlId, children, ...props } = this.props;

    return (
      <label styleName='animate' for={controlId} {...props}>{children}</label>
    );
  }
};
