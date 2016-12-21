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
    this.setState({value});
  }

  render() {
    const { label, ...props } = this.props;
    
    return (
      <div styleName='field'>
        <FormControl styleName={`field-control ${this.state.value ? 'not-empty' : ''}`} onChanged={this.handleChange} {...props} />
        <ControlLabel styleName="field-label" controlId={this.props.id}>{label}</ControlLabel>
        <div styleName="field-bar" />
      </div>
    );
  }
};