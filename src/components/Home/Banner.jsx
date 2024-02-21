import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bannerImgFour,
  bannerImgFive,
} from "../../assets";
const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="h-full">
      <div>
        <img src={bannerImgOne} alt="banner1" />
      </div>
      <div>
        <img src={bannerImgTwo} alt="banner2" />
      </div>
      <div>
        <img src={bannerImgThree} alt="banner3" />
      </div>
      <div>
        <img src={bannerImgFour} alt="banner4" />
      </div>
      <div>
        <img src={bannerImgFive} alt="banner5" />
      </div>
    </Slider>
  );
};

export default Banner;
