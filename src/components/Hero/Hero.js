import { SectionHeroStyle } from './Hero.style';

import Profile from '../../assets/img/perfil.png';
export const Hero = () => {
  return (
    <SectionHeroStyle className='section' id='home'>
      <div className='home-container container row'>
        <div className='home-content row'>
          <div className='home-social'>
            <a
              href='https://www.linkedin.com/'
              className='home-social-icon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='uil uil-linkedin-alt'></i>
            </a>
            <a
              href='https://www.dribbble.com/'
              className='home-social-icon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='uil uil-dribbble'></i>
            </a>
            <a
              href='https://www.github.com/'
              className='home-social-icon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='uil uil-github-alt'></i>
            </a>
          </div>

          <div className='home-img'>
            <svg
              className='home-blob'
              viewBox='0 0 200 187'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <mask id='mask0' mask-type='alpha'>
                <path
                  d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
              130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
              97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
              0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
                />
              </mask>
              <g mask='url(#mask0)'>
                <path
                  d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
              129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
              -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
                />
                <image className='home-blob-img' x='12' y='18' href={Profile} />
              </g>
            </svg>
          </div>

          <div className='home-data'>
            <h1 className='home-title'>Hi, I'am Jane</h1>
            <h3 className='home-subtitle'>Frontend Developer</h3>
            <p className='home-description'>
              High level experience in web design and knowledge, producing
              quality work.
            </p>
            <a href='#contact' className='button button-home'>
              Contact Me <i className='uil uil-message button-icon'></i>
            </a>
          </div>
        </div>
        <div className='home-scroll'>
          <a href='#about' className='home-scroll-button button-home'>
            <i className='uil uil-mouse-alt home-scroll-mouse'></i>
            <span className='home-scroll-name'>Scroll down</span>
            <i className='uil uil-arrow-down home-scroll-arrow'></i>
          </a>
        </div>
      </div>
    </SectionHeroStyle>
  );
};

export default Hero;
