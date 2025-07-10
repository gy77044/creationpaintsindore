import React from 'react';
    import { NavLink } from 'react-router-dom';
    import styled from 'styled-components';
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';
    import Slider, { Settings } from 'react-slick';
  import BlueRoom from "../assests/BlueRoom.jpeg"
import GreenRoom from "../assests/GreenRoom.jpeg"
import LightGreenRoom from "../assests/LightGreenRoom.jpeg"
import OrangeRoom from "../assests/OrangeRoom.jpeg"
import redRoom from "../assests/redRoom.jpeg"
import skyblueRoom from "../assests/skyblueRoom.jpeg"
import WhiteRoom from "../assests/WhiteRoom.jpeg"
import pinkbalti from "../assests/pinkbalti.jpeg"
import acrylicbalti from "../assests/acrylicbalti.jpeg"
import blackbalti2 from "../assests/blackbalti2.jpeg"
import bluebalti from "../assests/bluebalti.jpeg"
import greenbalti from "../assests/greenbalti.jpeg"
import './slider.scss';

const ImgSlider: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
  };

  return (
    <>
      <Carousel {...settings}>
        <Container>
          <Wraps>
            {/* <NavLink to="/"> */}
            <div className='relative'>
              <img src={OrangeRoom} alt="Slide A" />
              {/* <div className='absolute w-[300px] h-[10px] top-0 left-0  z-50'> */}
              {/* <img className='' src={acrylicbalti} alt="" /> */}
              {/* </div> */}
             </div>
            {/* </NavLink> */}
          </Wraps>
        </Container>
        <Container>
          <Wraps>
            {/* <NavLink to="/"> */}
            <div className='relative'>
              <img src={WhiteRoom} alt="Slide B" />
              {/* <img className='absolute w-10 h-10 bg-red-500 bottom-0 right-0 z-50' src={acrylicbalti} alt="" /> */}
             </div>
            {/* </NavLink> */}
          </Wraps>
        </Container>
        <Container>
          <Wraps>
            {/* <NavLink to="/"> */}
            <div className='relative'>
              <img src={redRoom} alt="Slide C" />
              {/* <img className='absolute w-10 h-10 bg-red-500 bottom-0 right-0 z-50' src={acrylicbalti} alt="" /> */}
             </div>
            {/* </NavLink> */}
          </Wraps>
        </Container>
        <Container>
          <Wraps>
            {/* <NavLink to="/"> */}
            <div className='relative'>
              <img src={skyblueRoom} alt="Slide C" />
              {/* <img className='absolute w-10 h-10 bg-red-500 bottom-0 right-0 z-50' src={acrylicbalti} alt="" /> */}
             </div>
            {/* </NavLink> */}
          </Wraps>
        </Container>
        <Container>
          <Wraps>
            {/* <NavLink to="/"> */}
            <div className='relative'>
              <img src={GreenRoom} alt="Slide C" />
              {/* <img className='absolute w-10 h-10 bg-red-500 bottom-0 right-0 z-50' src={acrylicbalti} alt="" /> */}
             </div>
            {/* </NavLink> */}
          </Wraps>
        </Container>
        <Container>
          <Wraps>
            {/* <NavLink to="/"> */}
            <div className='relative'>
              <img src={BlueRoom} alt="Slide C" />
              {/* <img className='absolute w-10 h-10 bg-red-500 bottom-0 right-0 z-50' src={acrylicbalti} alt="" /> */}
             </div>
            {/* </NavLink> */}
          </Wraps>
        </Container>
        <Container>
          <Wraps>
            {/* <NavLink to="/"> */}
            <div className='relative'>
              <img src={LightGreenRoom} alt="Slide C" />
             {/* <img className='absolute w-10 h-10 bg-red-500 bottom-0 right-0 z-50' src={acrylicbalti} alt="" /> */}
            </div>
            {/* </NavLink> */}
          </Wraps>
        </Container>
      </Carousel>

    </>
  );
};

export default ImgSlider;

// Styled Components

const Carousel = styled(Slider)`
  ul li button {
    position: absolute;
    top: -300px;
    left: -450px;
    &:before {
      color: white;
      display: block;
      font-size: 10px;
    }
  }
  li.slick-active button::before {
    color: var(--color-primary);
  }
  .slick-list {
    overflow: hidden;
  }
  .slick-arrow {
    opacity: 0;
    background: transparent;
    z-index: 1;
    margin: -60px 40px 0px 0px;
  }
  &:hover {
    button {
      opacity: 1;
    }
  }
`;

const Container = styled.div``;

const Wraps = styled.div`
  img {
    width: 100%;
    height: 84vh;
    object-fit: cover;
  }
`;

const CardContainer = styled.div`
  position: absolute;
  top: 0;
`;
