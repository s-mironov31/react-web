/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import importcss from 'importcss';
import history from '../../core/history';
import Link from '../Link';

@importcss(require('./Navigation.css'))
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {link: history ? history.location.pathname : ''};
    this.handleClick = this.handleClick.bind(this);
  }
  static propTypes = {
    className: PropTypes.string,
  };

  handleClick(link){
    this.setState({link});
  }

  render() {
    const link = this.state.link;
    const { ...props } = this.props;
    return (
      <div styleName='root' {...props} role="navigation">
        <Link styleName='link' link={link} to="/" onClick={this.handleClick}>Компания</Link>
        <Link styleName='link' link={link} to="/capabilities" onClick={this.handleClick}>Возможности</Link>
        <Link styleName='link' link={link} to="/portfolio" onClick={this.handleClick}>Портфолио</Link>
        <Link styleName='link' link={link} to="/clients" onClick={this.handleClick}>Клиенты</Link>
        <Link styleName='link' link={link} to="/contact" onClick={this.handleClick}>Контакты</Link>
        {/*<span styleName='spacer'> | </span>
        <Link styleName='link' to="/login">Log in</Link>
        <span styleName='spacer'>or</span>
        <Link styleName='link highlight' to="/register">Sign up</Link>*/}
      </div>
    );
  }
}
