import React from 'react';
import importcss from 'importcss';
import Grid from 'react-bootstrap/lib/Grid';
import Link from '../Link';
import logoUrl from '../../assets/images/logo.png';

@importcss(require('./Footer.css'))
export default class Footer extends React.Component {
  render() {
    return (
      <div styleName='root'>
        <Grid>
          <div className='pull-left' styleName='brandBox'>
            <Link to="/">
              <img src={logoUrl} width="30" height="auto" alt="OKiWeb" />
              <span styleName='company-name'>one tack</span>
            </Link>
            <div styleName='company-title'>Video <span styleName='company-name'>&</span> Photography</div>
            <div styleName='company-slogan'>Production Services</div>
          </div>
          <div className='clearfix' />
          <div className='row'>
            <div className='col-sm-3'>
              <span>305000, г. Курск</span>
              <br /><span>ул. Дзержинского, 19</span>
              <br /><span>info@onetack.ru</span>
              <br /><br /><span>2016 © ONE TAKE</span>
            </div>
            <div className='col-sm-3'>
              <br className='hidden-xs hidden-sm' /><span>ПО ВОПРОСАМ</span>
              <br/><span>СОТРУДНИЧЕСТВА</span>
              <br /><br /><span>onetake@inbox.ru</span>
            </div>
            <div className='col-sm-3'>
              <br className='hidden-xs hidden-sm' />
              <br className='hidden-xs hidden-sm' />
              <br className='hidden-xs hidden-sm' />
              <br className='hidden-xs hidden-sm' />
              <span>Т. +7(951) 330-79-94</span>
            </div>
            <div className='hidden-xs hidden-sm'>
              <br className='hidden-xs hidden-sm' />
              <br className='hidden-xs hidden-sm' />
              <span>РАЗРАБОТАНО OKiWeb</span>
              <br /><br/><span>OKiWeb.ru</span>
            </div>
          </div>
        </Grid>
        <div className='clearfix' />
      </div>
    );
  }
}
