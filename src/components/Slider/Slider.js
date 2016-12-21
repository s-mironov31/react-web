import React, { PropTypes } from 'react';
import Slider from 'react-slick';
// import Carousel from 'nuka-carousel';
// import cx from 'classnames';
import importcss from 'importcss';

// export default class SimpleSlider extends React.Component {
//   constructor(){
//     super();
//     this.mixins = [Carousel.ControllerMixin];
//   }
//
//   render() {
//     return (
//       <Carousel>
//         <img src='https://wallpaperscraft.ru/image/sankt_peterburg_ermitazh_naberezhnaya_100037_1366x768.jpg' />
//         <img src='http://www.hqwallpapers.ru/wallpapers/city/belye-nochi.jpg' />
//         <img src='http://www.1366x768.ru/city/21/Tower-Bridge-wallpaper-1366x768.jpg' />
//         <img src='http://wallpapers-images.ru/1366x768/city/wallpapers/city-wallpapers-1366x768-00013.jpg' />
//         <img src='http://img-fotki.yandex.ru/get/9498/161515092.2e/0_ab198_d93641bd_orig' />
//         <img src='http://wallpapers-images.ru/1366x768/city/wallpapers/wallpapers-city-6.jpg' />
//       </Carousel>
//     )
//   }
// };

@importcss(require('./Slider.css'))
export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      autoplaySpeed: 5*1000
   };
   return (
     <Slider {...settings}>
      <div styleName="swiper-slide"><img src='https://wallpaperscraft.ru/image/sankt_peterburg_ermitazh_naberezhnaya_100037_1366x768.jpg' /></div>
      <div styleName="swiper-slide"><img src='http://www.hqwallpapers.ru/wallpapers/city/belye-nochi.jpg' /></div>
      <div styleName="swiper-slide"><img src='http://www.1366x768.ru/city/21/Tower-Bridge-wallpaper-1366x768.jpg' /></div>
      <div styleName="swiper-slide"><img src='http://wallpapers-images.ru/1366x768/city/wallpapers/city-wallpapers-1366x768-00013.jpg' /></div>
      <div styleName="swiper-slide"><img src='http://img-fotki.yandex.ru/get/9498/161515092.2e/0_ab198_d93641bd_orig' /></div>
      <div styleName="swiper-slide"><img src='http://wallpapers-images.ru/1366x768/city/wallpapers/wallpapers-city-6.jpg' /></div>
     </Slider>
   );
  }
}
