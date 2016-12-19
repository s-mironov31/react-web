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

@importcss(require('./Feedback.css'))
export default class Feedback extends React.Component {
  render() {
    return (
      <Form horizontal>
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
      </Form>
    );
  }
}
