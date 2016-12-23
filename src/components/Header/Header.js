import React from 'react';
import importcss from 'importcss';
import Grid from 'react-bootstrap/lib/Grid';
import Link from '../Link';
import Navigation from '../Navigation';
import ShareBar from '../ShareBar';
import logoUrl from './logo@2x.png';

@importcss(require('./Header.css'))
export default class Header extends React.Component {
  render() {
    return (
      <header styleName='header'>
        <Grid>
          <Navigation styleName='nav' />
          <Link styleName='brand' to="/">
            <img src={logoUrl} width="125" height="auto" alt="OKiWeb" />
          </Link>
          <ShareBar />
        </Grid>
      </header>
    );
  }
}
