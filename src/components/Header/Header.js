import React from 'react';
import importcss from 'importcss';
import Grid from 'react-bootstrap/lib/Grid';
import Link from '../Link';
import Navigation from '../Navigation';
import ShareBar from '../ShareBar';
import logoUrl from '../../assets/images/logo.png';

@importcss(require('./Header.css'))
export default class Header extends React.Component {
  render() {
    return (
      <header styleName='header'>
        <Grid>
          <div styleName='brandBox' className='pull-left'>
            <Link to="/">
              <img src={logoUrl} width="auto" height="auto" alt="OKiWeb" />
              <span styleName='company-name'>one tack</span>
            </Link>
            <div styleName='company-title'>Video <span styleName='company-name'>&</span> Photography</div>
            <div styleName='company-slogan'>Production Services</div>
          </div>
          <ShareBar styleName='nav'/>
          <div className='clearfix' />
          <Navigation />
        </Grid>
      </header>
    );
  }
}
