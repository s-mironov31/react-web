import React, { PropTypes } from 'react';
import importcss from 'importcss';
import history from '../../core/history';
import Link from '../Link';

@importcss(require('./MobileNavigation.css'))
export default class MobileNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isActiveLink: history ? history.location.pathname : ''};
    this.handleClick = this.handleClick.bind(this);
  }
  static propTypes = {
    visibility: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  };

  handleClick(isActiveLink){
    this.props.onClick(true);
    this.setState({isActiveLink});
  }

  render() {
    const isActiveLink = this.state.isActiveLink;
    const { visibility, onClick, ...props } = this.props;
    const hidden = !visibility ? 'mobile-menu-hidden' : '';
    return (
      <nav styleName={`mobile-menu ${hidden}`} {...props}>
        <ul>
          <li><Link styleName='link' link={isActiveLink} to="/" onClick={this.handleClick}>Компания</Link></li>
          <li><Link styleName='link' link={isActiveLink} to="/capabilities" onClick={this.handleClick}>Возможности</Link></li>
          <li><Link styleName='link' link={isActiveLink} to="/portfolio" onClick={this.handleClick}>Портфолио</Link></li>
          <li><Link styleName='link' link={isActiveLink} to="/clients" onClick={this.handleClick}>Клиенты</Link></li>
          <li><Link styleName='link' link={isActiveLink} to="/contact" onClick={this.handleClick}>Контакты</Link></li>
        </ul>
      </nav>
    );
  }
}
