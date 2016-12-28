import React, { Component, PropTypes } from 'react';
import importcss from 'importcss'

@importcss(require('./FormControl.css'))
export default class FormControl extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
  };

  getValue() {
      return this.textInput.value;
  }
  handleChange(e) {
    if (this.props.onChanged) {
      this.props.onChanged(this.textInput.value);
    }
  }

  render() {
    const { textarea, onChanged, ...props } = this.props;
    let control = null;

    if (textarea) {
      control = <textarea onChange={this.handleChange} ref={(input) => this.textInput = input} {...props} />;
    } else {
      control = <input onChange={this.handleChange} ref={(input) => this.textInput = input} {...props} />
    }

    return control;
  }
};
