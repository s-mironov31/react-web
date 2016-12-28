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

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput() {
    this.setState({
      name: this.nameInput.getValue(),
      email: this.emailInput.getValue(),
      phone: this.phoneInput.getValue(),
      message: this.messageInput.getValue()
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    alert(`name: ${this.state.name}; email: ${this.state.email}; phone: ${this.state.phone}; message: ${this.state.message}`);
  }

  render() {
    const {children, ...props} = this.props;
    return (
      <div {...props}>
        {children}
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Col sm={12}>
              <FieldGroup value={this.state.name} ref={input => {this.nameInput = input}} id="name" label="Ваше имя" type="text" onInput={this.handleInput} required />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={6}>
              <FieldGroup value={this.state.email} ref={input => {this.emailInput = input}} id="email" label="E-mail" type="email" onInput={this.handleInput} required />
            </Col>
            <Col sm={6}>
              <FieldGroup value={this.state.phone} ref={input => {this.phoneInput = input}} id="phone" label="Телефон" type="text" onInput={this.handleInput} />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
              <FieldGroup value={this.state.message} ref={input => {this.messageInput = input}} id="message" label="Суть Вашего обращения" onInput={this.handleInput} textarea required />
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
      </div>
    );
  }
}
