import React, { Component, PropTypes } from 'react';
import importcss from 'importcss'
import Share from '../Share';

@importcss(require('./ShareBar.css'))
export default class ShareBar extends React.Component {
  render() {
    return(
      <ul styleName='list'>
        <li styleName='item'>
          <Share to="https://vk.com/" styleName="vk" title="ВКонтакте" big />
        </li>
        <li styleName='item'>
          <Share to="https://www.facebook.com/" styleName="fb" title="Facebook" />
        </li>
        <li styleName='item'>
          <Share to="https://www.facebook.com/" styleName="odk" title="Одноклассники" />
        </li>
        <li styleName='item'>
          <Share to="https://www.facebook.com/" styleName="tw" title="Twitte" />
        </li>
        <li styleName='item'>
          <Share to="https://www.facebook.com/" styleName="instagram" title="Instagram" />
        </li>
      </ul>
    );
  }

}
