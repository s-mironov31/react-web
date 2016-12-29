import React, { PropTypes } from 'react';
import importcss from 'importcss';
import Grid from 'react-bootstrap/lib/Grid';
import Link from '../Link';
import Navigation from '../Navigation';
import MobileNavigation from '../MobileNavigation';
import ShareBar from '../ShareBar';
import logoUrl from '../../assets/images/logo.png';

@importcss(require('./MobileNavbar.css'))
export default class MobileNavbar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    visibility: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
  };

  handleClick() {
    this.props.onChange();
  }

  render() {
    const { visibility, onChange, ...props } = this.props;
    const isActive = visibility ? 'is-active' : '';
    return (
      <div styleName="mobile-navbar" {...props}>
        <div styleName={`c-hamburger c-hamburger--htx ${isActive}`} onClick={this.handleClick}>
          <span>toggle menu</span>
        </div>
        <Link to="/" styleName="mobile-logo">
          <img src={logoUrl} width="auto" height="auto" alt="OKiWeb" />
          <span styleName="company-name">one tack</span>
        </Link>

        <ShareBar styleName='sharebar'/>
			</div>
    );
  }
}
