/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import FieldGroup from '../../components/FieldGroup';
import s from './Capabilities.css';

class Capabilities extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <FieldGroup id="name" label="Ваше имя" type="text" required />
          <FieldGroup id="textarea" label="Суть Вашего обращения" textarea required />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Capabilities);
