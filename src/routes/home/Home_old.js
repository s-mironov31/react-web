/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import SimpleSlider from '../../components/Slider';
import Feedback from '../../components/Feedback';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import importcss from 'importcss'

@importcss(require('./Home.css'))
export default class Home extends React.Component {

  render() {
    return (
      <div styleName="content">
        <div styleName="block-1">
          <Grid>  
            <div styleName="media">
              <SimpleSlider />
            </div>
          </Grid>
        </div>
        <div styleName="block-2">
          <Grid>
            <Feedback />
          </Grid>
        </div>
      </div>
    );
  }
}
