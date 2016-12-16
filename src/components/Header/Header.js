/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo@2x.png';
// import st from '../bootstrap.scss';

class Header extends React.Component {
  render() {
    return (
      <div>
        {/*<Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <span>Hello World</span>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav navbar>
              <LinkContainer to='/about'>
                <NavItem>About</NavItem>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <NavItem>Contact</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>*/}

        <div className={s.root}>
          <div className={s.container}>
            <Navigation className={s.nav} />
            <Link className={s.brand} to="/">
              <img src={logoUrl} width="125" height="auto" alt="OKiWeb" />
              {/*<span className={s.brandTxt}>Your Company</span>*/}
            </Link>
            {/*<div className={s.banner}>
              <h1 className={s.bannerTitle}>{this.props.title || 'Hello JS World'}</h1>
              <p className={s.bannerDesc}>Complex web apps made easy</p>
            </div>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
