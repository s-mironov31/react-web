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

  handleChange(value){
    if (this.props.onInput) {
      this.props.onInput(value);
    }

    this.setState({value});
  }

  render() {
    const { label, onInput, ...props } = this.props;

    return (
      <div styleName='field'>
        <FormControl styleName={`field-control ${this.props.textarea ? 'textarea' : ''} ${this.state.value ? 'not-empty' : ''}`} onChanged={this.handleChange} {...props} />
        <ControlLabel styleName="field-label" controlId={this.props.id}>{label}</ControlLabel>
        <div styleName={`field-bar ${this.props.textarea ? 'field-bar-textarea' : ''}`} />
      </div>
    );
  }
};
