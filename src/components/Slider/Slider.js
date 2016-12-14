import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Slider.css';

class SimpleSlider extends React.Component {
  render() {
    const settings = {
     dots: true
    //  infinite: true,
    //  speed: 500,
    //  slidesToShow: 1,
    //  slidesToScroll: 1
   };
   return (
     <div>
       <link rel="stylesheet" type="text/css" href='//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
       <link rel="stylesheet" type="text/css" href='//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
       <Slider {...settings}>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
       </Slider>
     </div>
   );
  }
}

export default withStyles(s)(SimpleSlider);
