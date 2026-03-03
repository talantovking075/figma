import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './FlashSales.css';
import { RiArrowLeftSLine, RiArrowRightSLine, RiHeartLine, RiEyeLine } from "react-icons/ri";

const FlashSales = () => {
  const products = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", img: "gamepad_url", price: 120, oldPrice: 160, discount: 35 },
    { id: 2, name: "S-Series Comfort Chair", img: "chair_url", price: 375, oldPrice: 400, discount: 35 },
    { id: 3, name: "IPS LCD Gaming Monitor", img: "monitor_url", price: 370, oldPrice: 400, discount: 35 },
    { id: 4, name: "S-Series Comfort Chair", img: "chair_url", price: 375, oldPrice: 400, discount: 35 },
  ];

  return (
    <div className='sales-container'>
      <div className="sales-header">
        <div className="header-left">
          <h1 className='sales-title'>Yangi chegirmalar</h1>
          <div className="timer">
            <div className="time-unit"><span>Days</span><strong>03</strong></div>
            <div className="separator">:</div>
            <div className="time-unit"><span>Hours</span><strong>23</strong></div>
            <div className="separator">:</div>
            <div className="time-unit"><span>Minutes</span><strong>19</strong></div>
            <div className="separator">:</div>
            <div className="time-unit"><span>Seconds</span><strong>56</strong></div>
          </div>
        </div>
        <div className="swiper-nav-btns">
          <div className="prev-sales"><RiArrowLeftSLine /></div>
          <div className="next-sales"><RiArrowRightSLine /></div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{ prevEl: '.prev-sales', nextEl: '.next-sales' }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map(item => (
          <SwiperSlide key={item.id}>
            <div className="product-card">
              <div className="card-top">
                <span className="discount-badge">-{item.discount}%</span>
                <div className="card-actions">
                  <button><RiHeartLine /></button>
                  <button><RiEyeLine /></button>
                </div>
                <img src={item.img} alt={item.name} />
              </div>
              <div className="card-bottom">
                <h3>{item.name}</h3>
                <div className="price-row">
                  <span className="new-price">${item.price}</span>
                  <span className="old-price">${item.oldPrice}</span>
                  <button className="buy-btn">Buyurtma berish</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="korish">Barchasini ko'rish</button>
    </div>
  );
};

export default FlashSales;