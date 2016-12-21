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

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

@importcss(require('./Link.css'))
export default class Link extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func,
    link: PropTypes.string
  };

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(this.props.to);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }

    event.preventDefault();
    history.push(this.props.to);
  };

  render() {
    const selected = this.props.link == this.props.to ? 'yes' : 'no';
    const { to, children, link, ...props } = this.props;
    return <a href={to} {...props} styleName={`active-${selected}`} onClick={this.handleClick}>{children}</a>;
  }
}
