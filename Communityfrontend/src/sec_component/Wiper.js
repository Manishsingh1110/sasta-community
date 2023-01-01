import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';


function Wiper() {
  return (
    
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={1}
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slide">
            <div className="item">
              <h3 className="mb-3">Let's grow our technology</h3>
              <h4 className="mb-3">Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsam perferendis asperiores explicabo vel tempore velit totam, natus nesciunt accusantium dicta quod quibusdam ipsum maiores nobis non, eum. Ullam reiciendis dignissimos laborum aut, magni voluptatem velit doloribus quas sapiente optio.</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-slide">
            <div className="item">
              <h3 className="mb-3">To discover New things</h3>
              <h4 className="mb-3">Amet cumque nam sed voluptas doloribus iusto. Dolorem eos aliquam quis.</h4>
              <p>Dolorem quia fuga consectetur voluptatem. Earum consequatur nulla maxime necessitatibus cum accusamus. Voluptatem dolorem ut numquam dolorum delectus autem veritatis facilis. Et ea ut repellat ea. Facere est dolores fugiat dolor.</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-slide">
            <div className="item">
              <h3 className="mb-3">To share and Gain knowlege</h3>
              <h4 className="mb-3">Necessitatibus voluptatibus explicabo dolores a vitae voluptatum.</h4>
              <p>Neque voluptates aut. Soluta aut perspiciatis porro deserunt. Voluptate ut itaque velit. Aut consectetur voluptatem aspernatur sequi sit laborum. Voluptas enim dolorum fugiat aut.</p>
            </div>
          </div>
          </SwiperSlide>
      </Swiper>
  )
}

export default Wiper