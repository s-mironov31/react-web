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
import s from './Footer.css';
import Link from '../Link';
import logoUrl from '../Header/logo@2x.png';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {/*<div className={s.nav}>
            <Link className={s.link} to="/">Home</Link>
            <span className={s.spacer}>·</span>
            <Link className={s.link} to="/admin">Admin</Link>
            <span className={s.spacer}>·</span>
            <Link className={s.link} to="/privacy">Privacy</Link>
            <span className={s.spacer}>·</span>
            <Link className={s.link} to="/not-found">Not Found</Link>
          </div>*/}
          <span className={s.text}>© OKiWeb, 2016.</span>
          <img src={logoUrl} width="80" height="auto" alt="OKiWeb" />
          <span className={s.text}>305000 Россия, г. Курск, ул. Дзержинского, 19</span>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
