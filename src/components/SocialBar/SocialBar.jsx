import React, { Component, PropTypes } from 'react';
import importcss from 'importcss'

@importcss(require('./SocialBar.css'))
export default class SocialBar extends React.Component {

  render() {
		const { title, ...props } = this.props;

    return (
			<a href={to} {...props} styleName='share' rel="nofollow" target="_blank" title={title}>
				<span styleName="badge">
					<span styleName="icon"></span>
				</span>
				<span styleName='title' title>{title}</span>
			</a>
    );
  }
};
