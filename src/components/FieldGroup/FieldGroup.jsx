import React, { Component, PropTypes } from 'react';
import FormControl from '../FormControl';
import ControlLabel from '../ControlLabel';
import importcss from 'importcss'

@importcss(require('./FieldGroup.css'))
export default class FieldGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  getValue(){
    return this.controlField.getValue();
  }

  handleChange(value){
    if (this.props.onInput) {
      this.props.onInput(value);
    }
  }

  render() {
    const { label, onInput, ...props } = this.props;

    return (
      <div styleName='field'>
        <FormControl styleName={`field-control ${this.props.textarea ? 'textarea' : ''} ${this.props.value ? 'not-empty' : ''}`} ref={(input) => this.controlField = input} onChanged={this.handleChange} {...props} />
        <ControlLabel styleName={`field-label ${this.props.required ? 'required' : ''}`} controlId={this.props.id}>{label}</ControlLabel>
        <div styleName={`field-bar ${this.props.textarea ? 'field-bar-textarea' : ''}`} />
      </div>
    );
  }
};
