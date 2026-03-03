import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Category.css';
import { 
  RiSmartphoneLine, 
  RiComputerLine, 
  RiTimeLine, 
  RiCameraLine, 
  RiHeadphoneLine, 
  RiGamepadLine,
  RiArrowLeftSLine, 
  RiArrowRightSLine 
} from "react-icons/ri";

const Category = () => {
  return (
    <div className='category-container'>
      <div className="category-header">
        <h1 className='category-title'>Kataloglar</h1>
        <div className="swiper-nav-btns">
          <div className="prev-btn"><RiArrowLeftSLine /></div>
          <div className="next-btn"><RiArrowRightSLine /></div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation={{
          prevEl: '.prev-btn',
          nextEl: '.next-btn',
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
        className="category-swiper"
      >
        <SwiperSlide>
          <div className="category-item">
            <RiSmartphoneLine className='icon' />
            <span>Telefon</span>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="category-item">
            <RiComputerLine className='icon' />
            <span>Kompyuter</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="category-item">
            <RiTimeLine className='icon' />
            <span>Aqilli soatlar</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="category-item active">
            <RiCameraLine className='icon' />
            <span>Kamera</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="category-item">
            <RiHeadphoneLine className='icon' />
            <span>Quloqchinlar</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="category-item">
            <RiGamepadLine className='icon' />
            <span>Aksesuarlar</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;