import React from 'react';
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import cake1 from '../assets/cake1.jpg';
import cake2 from '../assets/cake2.jpg';
import cake3 from '../assets/cake3.jpg';
import cake4 from '../assets/cake4.jpg';

const Slider = () => {
  const images = [cake1, cake2, cake3, cake4];

  return (
    <section className="w-full h-full  overflow-hidden  inset-0 bg-black opacity-50">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        direction="horizontal"
        loop={true}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <>
              <img
                src={img}
                alt={`slide-${index + 1}`}
                className="w-full lg:h-full h-screen object-fill"
              />
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
