import { SectionTestimonialStyle } from './Testimonial.style.js';

import Testimonial1 from '../../assets/img/testimonial1.jpg';
import Testimonial2 from '../../assets/img/testimonial2.jpg';
import Testimonial3 from '../../assets/img/testimonial3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
const Testimonial = () => {
  return (
    <SectionTestimonialStyle className='testimonial section'>
      <h2 className='section-title'>Testimonial</h2>
      <span className='section-subtitle'>My client saying</span>

      <div className='testimonial-container container'>
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          grabCursor={true}
          spaceBetween={48}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          {/* testimonial 1 */}
          <SwiperSlide className='testimonial-content'>
            <div className='testimonial-data'>
              <div className='testimonial-header'>
                <img
                  src={Testimonial1}
                  alt='testimonial1'
                  className='testimonial-img'
                />
                <div>
                  <h3 className='testimonial-name'>Sara Mith</h3>
                  <span className='testimonial-client'>Client</span>
                </div>
              </div>

              <div>
                <i className='uil uil-star testimonial-icon-star'></i>
                <i className='uil uil-star testimonial-icon-star'></i>
                <i className='uil uil-star testimonial-icon-star'></i>
                <i className='uil uil-star testimonial-icon-star'></i>
                <i className='uil uil-star testimonial-icon-star'></i>
              </div>
            </div>

            <p className='testimonial-description'>
              I get a good impression, I carry out my project with all the
              possible quality and attention and support 24 hour a day.
            </p>
          </SwiperSlide>
          {/* testimonial 2 */}
          <SwiperSlide className='testimonial-content'>
            <div className='testimonial-data'>
              <div className='testimonial-header'>
                <img
                  src={Testimonial2}
                  alt='testimonial1'
                  className='testimonial-img'
                />
                <div>
                  <h3 className='testimonial-name'>John Doe</h3>
                  <span className='testimonial-client'>Client</span>
                </div>
              </div>

              <div>
                <i className='uil uil-star testimonial-icon-star'></i>
                <i className='uil uil-star testimonial-icon-star'></i>
                <i className='uil uil-star testimonial-icon-star'></i>
                <i className='uil uil-star testimonial-icon-star'></i>
                <i className='uil uil-star testimonial-icon-star'></i>
              </div>
            </div>

            <p className='testimonial-description'>
              I get a good impression, I carry out my project with all the
              possible quality and attention and support 24 hour a day.
            </p>
          </SwiperSlide>
          {/* testimonial 3 */}
          <SwiperSlide className='testimonial-content'>
            <div className='testimonial-data'>
              <div className='testimonial-header'>
                <img
                  src={Testimonial3}
                  alt='testimonial1'
                  className='testimonial-img'
                />
                <div>
                  <h3 className='testimonial-name'>John Smith</h3>
                  <span className='testimonial-client'>Client</span>
                </div>
              </div>

              <div>
                <i className='uil uil-star testimonial-icon-star'></i>
                <i className='uil uil-star testimonial-icon-star'></i>
                <i className='uil uil-star testimonial-icon-star'></i>
                <i className='uil uil-star testimonial-icon-star'></i>
                <i className='uil uil-star testimonial-icon-star'></i>
              </div>
            </div>

            <p className='testimonial-description'>
              I get a good impression, I carry out my project with all the
              possible quality and attention and support 24 hour a day.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </SectionTestimonialStyle>
  );
};

export default Testimonial;
