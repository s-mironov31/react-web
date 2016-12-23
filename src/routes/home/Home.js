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
        <Grid>
          <Feedback />
        </Grid>
      </div>
    );
  }
}
