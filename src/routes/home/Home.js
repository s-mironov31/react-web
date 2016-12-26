import React, { PropTypes } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import importcss from 'importcss'
import Link from '../../components/Link';
import Feedback from '../../components/Feedback';

@importcss(require('./Home.css'))
export default class Home extends React.Component {

  render() {
    return (
      <div styleName="content">
        <Grid>
          <section>
            <div styleName='onetack'>One Tack</div>
            <div styleName='paragraph'>
              <ul styleName='tags'>
                <li>современные тренды видеопроизводства</li>
              </ul>
              <div styleName='small'>Мы берем на себя весь творческий процесс от идеи до создания гармоничного произведения</div>
              <Link styleName='link' to="/portfolio" >Просмотр</Link>
            </div>
          </section>
          <section>
            <div styleName='big-title'>почему мы?</div>
            <div styleName='paragraph'>
              <ul styleName='tags'>
                <li>новейшие разработки</li>
                <li>самые передовые технологии</li>
                <li>непревзойденное мастерство</li>
                <li>работа "пол ключ"</li>
              </ul>
            </div>
          </section>
          <section>
            <ul className='pull-right' styleName='tags tags-right'>
              <li>новейшие разработки</li>
              <li>самые передовые технологии</li>
              <li>непревзойденное мастерство</li>
              <li>работа "пол ключ"</li>
            </ul>
            <div className='clearfix' />
          </section>
          <Row>
            <Feedback className="col-sm-offset-3 col-sm-6">
              <div styleName='feedback-title'>
                <span styleName='big'>написать нам</span><br/>
                <span styleName='small'>У вас есть вопрос? Мы ответим.</span>
              </div>
            </Feedback>
          </Row>
        </Grid>
      </div>
    );
  }
}
