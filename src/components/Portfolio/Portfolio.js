import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import Portfolio1 from "../../assets/img/portfolio1.jpg";
import Portfolio2 from "../../assets/img/portfolio2.jpg";
import Portfolio3 from "../../assets/img/portfolio3.jpg";
import Portfolio4 from "../../assets/img/portfolio4.jpg";

import { SectionPortfolioStyle } from "./Portfolio.style";
const Portfolio = () => {
  return (
    <SectionPortfolioStyle className="portfolio section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <span className="section-subtitle">Most recent work</span>

      <div className="portfolio-container container">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={(true, { clickable: true })}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {/* portfolio 1 */}
          <SwiperSlide className="portfolio-content row">
            <img className="portfolio-img" src={Portfolio1} alt="portfolio 1" />

            <div className="portfolio-data">
              <h3 className="portfolio-title">Modern Website</h3>
              <h2>Site para uma loja de variedades domesticas</h2>
              <p className="portfolio-description">
                Website adaptable to all devices, with ui components and
                animated interactions.
              </p>

              <a href="#demo" className="button portfolio-button">
                Demo <div className="uil uil-arrow-right button-icon"></div>
              </a>
            </div>
          </SwiperSlide>

          {/* portfolio 2 */}
          <SwiperSlide className="portfolio-content row">
            <img className="portfolio-img" src={Portfolio2} alt="portfolio 1" />

            <div className="portfolio-data">
              <h3 className="portfolio-title">Brand Design</h3>
              <p className="portfolio-description">
                Website adaptable to all devices, with ui components and
                animated interactions.
              </p>

              <a href="#demo" className="button portfolio-button">
                Demo <div className="uil uil-arrow-right button-icon"></div>
              </a>
            </div>
          </SwiperSlide>

          {/* portfolio 3 */}
          <SwiperSlide className="portfolio-content row">
            <img className="portfolio-img" src={Portfolio3} alt="portfolio 1" />

            <div className="portfolio-data">
              <h3 className="portfolio-title">Online Store</h3>
              <p className="portfolio-description">
                Website adaptable to all devices, with ui components and
                animated interactions.
              </p>

              <a href="#demo" className="button portfolio-button">
                Demo <div className="uil uil-arrow-right button-icon"></div>
              </a>
            </div>
          </SwiperSlide>

          {/* portfolio 4 */}
          <SwiperSlide className="portfolio-content row">
            <img className="portfolio-img" src={Portfolio4} alt="portfolio 1" />

            <div className="portfolio-data">
              <h3 className="portfolio-title">
                Software de Academia Musculação
              </h3>
              <p className="portfolio-description">
                <p>Claro, aqui está o texto organizado:</p>
                <p>
                  "Este programa, desenvolvido em Delphi 7, está em uso há 8
                  anos. Ele funciona como um personal trainer virtual,
                  permitindo que o aluno acompanhe seus treinos, medidas,
                  evolução, crescimento e potencial no treino. Além disso, o
                  programa oferece a possibilidade de tirar dúvidas sobre os
                  exercícios e acompanhar a evolução das medidas do aluno."
                </p>
              </p>

              <a href="#demo" className="button portfolio-button">
                Demo <div className="uil uil-arrow-right button-icon"></div>
              </a>
            </div>
          </SwiperSlide>
          {/* <div className='swiper-button-next'>
            <i className='uil uil-angle-right-b swiper-portfolio-icon'></i>
          </div>
          <div className='swiper-button-prev'>
            <i className='uil uil-angle-left-b swiper-portfolio-icon'></i>
          </div> */}
        </Swiper>
      </div>
    </SectionPortfolioStyle>
  );
};

export default Portfolio;
