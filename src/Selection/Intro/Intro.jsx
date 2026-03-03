import React from 'react';
import './Intro.css';
import lt from '../../images/laptop.png';
import product from '../../images/original 1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Intro = () => {
  const slides = [
    { id: 1, title: "New Laptop", text: "Lorem ipsum dolor sit amet consectetur." },
    { id: 2, title: "Gaming Beast", text: "Experience the next level of gaming." },
    { id: 3, title: "Work Station", text: "Power your productivity everywhere." },
    { id: 4, title: "Ultra Slim", text: "Thinnest and lightest laptop ever." },
  ];

  return (
    <div className="slider_wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true} 
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='intro_cont'>
              <div className="left">
                <h1 className="title">{item.title}</h1>
                <p className='text'>{item.text}</p>
                <button className='aloqa button'>Shop now</button>
              </div>
              <img src={product} alt="product" className="product_intro" />
              <img src={lt} alt="decoration"  className='lt_intro'/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Intro
