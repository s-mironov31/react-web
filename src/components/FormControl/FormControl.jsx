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

  handleChange(e) {
    if (this.props.onChanged) {
      this.props.onChanged(e.target.value);
    }

    this.setState({
      value: e.target.value,
    })
  }

  render() {
    const { id, type, placeholder, textarea, required, onChanged, ...props } = this.props;
    let control = null;

    if (textarea) {
      control = <textarea onChange={this.handleChange} value={this.state.value} id={id} placeholder={placeholder} required={required} {...props} />;
    } else {
      control = <input onChange={this.handleChange} value={this.state.value} id={id} type={type} placeholder={placeholder} required={required} {...props} />
    }

    return control;
  }
};
