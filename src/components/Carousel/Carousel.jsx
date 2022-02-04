import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css'

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div className="Carousel">
        <h2>Swipe To Slide</h2>
        <Slider {...settings}>
          <div className="carr_item">
            <h3>1</h3>
          </div>
          <div className="carr_item">
            <h3>2</h3>
          </div>
          <div className="carr_item">
            <h3>3</h3>
          </div>
          <div className="carr_item">
            <h3>4</h3>
          </div>
          <div className="carr_item">
            <h3>5</h3>
          </div>
          <div className="carr_item">
            <h3>6</h3>
          </div>
          <div className="carr_item">
            <h3>7</h3>
          </div>
          <div className="carr_item">
            <h3>8</h3>
          </div>
          <div className="carr_item">
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

/* 
//AUTO SLIDE
import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css'

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider {...settings} className="Carousel">
          <div className="carr_item">
            <h3>1</h3>
          </div>
          <div className="carr_item">
            <h3>2</h3>
          </div>
          <div className="carr_item">
            <h3>3</h3>
          </div>
          <div className="carr_item">
            <h3>4</h3>
          </div>
          <div className="carr_item">
            <h3>5</h3>
          </div>
          <div className="carr_item">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
 */