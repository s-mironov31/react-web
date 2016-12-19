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
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

@importcss(require('./Layout.css'))
export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div styleName="page">
        <div styleName="page-wrap">
          <Header />
          {this.props.children}  
          <div styleName="page-buf" />
        </div>
        <Footer />
      </div>
    );
  }
}
