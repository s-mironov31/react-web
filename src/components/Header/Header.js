import React from 'react';
import importcss from 'importcss';
import Grid from 'react-bootstrap/lib/Grid';
import Link from '../Link';
import Navigation from '../Navigation';
import MobileNavigation from '../MobileNavigation';
import MobileNavbar from '../MobileNavbar';
import ShareBar from '../ShareBar';
import logoUrl from '../../assets/images/logo.png';

@importcss(require('./Header.css'))
export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = { mobile: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState((prevState, props) => ({
      mobile: e ? false : !prevState.mobile
    }));
  }

  render() {
    return (
      <header styleName={`header ${this.state.mobile ? 'header-mobile' : ''}`}>
        <Grid styleName="main-menu-block">
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
        <MobileNavbar styleName="mobile-navbar" visibility={this.state.mobile} onChange={this.handleChange}/>
        <MobileNavigation styleName="mobile-menu" visibility={this.state.mobile} onClick={this.handleChange}/>
      </header>
    );
  }
}
