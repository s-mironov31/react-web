/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import importcss from 'importcss'
import FieldGroup from '../FieldGroup';

@importcss(require('./Feedback.css'))
export default class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePhoneInput = this.handlePhoneInput.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameInput(value) {
    this.setState({
      name: value
    });
  };
  handleEmailInput(value) {
    this.setState({
      email: value
    });
  };
  handlePhoneInput(value) {
    this.setState({
      phone: value
    });
  };
  handleMessageInput(value) {
    this.setState({
      message: value
    });
  };

  // handleEmailInput(value) {
  //   alert(value);
  //   alert(this.nameInput.state.value);
  //   this.setState({
  //     name: this.nameInput.state.value,
  //     email: this.emailInput.state.value,
  //     phone: this.phoneInput.state.value,
  //     message: this.messageInput.state.value
  //   })
  // }

  handleSubmit(e) {
    e.preventDefault();
      alert(`name: ${this.state.name}; email: ${this.state.email}; phone: ${this.state.phone}; message: ${this.state.message}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Col sm={12}>
            <FieldGroup
              id="name"
              label="Ваше имя"
              type="text"
              onInput={this.handleNameInput}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={6}>
            <FieldGroup
              id="email"
              label="E-mail"
              type="email"
              onInput={this.handleEmailInput}
              required
            />
          </Col>
          <Col sm={6}>
            <FieldGroup
              id="phone"
              label="Телефон"
              type="text"
              onInput={this.handlePhoneInput}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={12}>
            <FieldGroup
              id="message"
              label="Суть Вашего обращения"
              onInput={this.handleMessageInput}
              textarea
              required
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={4} sm={4}>
            <button type="submit">
              Отправить запрос
            </button>
          </Col>
        </FormGroup>

      {/*<Form horizontal>
        <FormGroup>
          <Col sm={6}>
            <FormControl type="text" styleName="control" placeholder="Как вас зовут" />
          </Col>
          <Col sm={6}>
            <FormControl type="text" placeholder="Ваша компания" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={6}>
            <FormControl type="text" placeholder="Телефон" />
          </Col>
          <Col sm={6}>
            <FormControl type="email" placeholder="E-mail" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <Col sm={12}>
            <FormControl componentClass="textarea" placeholder="Вкратце опишите вашу задачу" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={4} sm={4}>
            <Button type="submit">
            Отправить запрос
            </Button>
          </Col>
        </FormGroup>
      </Form>*/}
      </form>
    );
  }
}
