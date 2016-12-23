import React, { Component, PropTypes } from 'react';
import importcss from 'importcss'

@importcss(require('./Share.css'))
export default class Share extends React.Component {

  render() {
		const { to, title, big, ...props } = this.props;
    return (
      <a styleName='link' href={to} rel="nofollow" target="_blank" title={title}>
        <span styleName='badge'>
          <span styleName={`icon ${big ? 'big-icon' : ''}`} {...props}></span>
        </span>
      </a>
    );
  }
};
