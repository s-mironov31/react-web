import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
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

  handleSubmit(e) {
    e.preventDefault();
      alert(`name: ${this.state.name}; email: ${this.state.email}; phone: ${this.state.phone}; message: ${this.state.message}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Col sm={12}>
            <FieldGroup id="name" label="Ваше имя" type="text" onInput={this.handleNameInput} required />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={6}>
            <FieldGroup id="email" label="E-mail" type="email" onInput={this.handleEmailInput} required />
          </Col>
          <Col sm={6}>
            <FieldGroup id="phone" label="Телефон" type="text" onInput={this.handlePhoneInput} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={12}>
            <FieldGroup id="message" label="Суть Вашего обращения" onInput={this.handleMessageInput} textarea required />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={12}>
            <button className="center-block" styleName="submit" type="submit">
              Отправить запрос
            </button>
          </Col>
        </FormGroup>
      </form>
    );
  }
}
