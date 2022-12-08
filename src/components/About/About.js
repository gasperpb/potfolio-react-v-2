import AboutImage from '../../assets/img/about.jpg';

import { SectionAboutStyle } from './About.style';
const About = () => {
  return (
    <SectionAboutStyle className='section' id='about'>
      <h2 className='section-title'>About Me</h2>
      <span className='section-subtitle'>My introduction</span>
      <div className='about-container container row'>
        <img src={AboutImage} alt='about' className='about-image' />

        <div className='about-data'>
          <p className='about-description'>
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and Ui / Ux design,delivering quality of
            work.
          </p>

          <div className='about-info'>
            <div>
              <span className='about-info-title'>08+</span>
              <span className='about-info-name'>
                years <br /> experience{' '}
              </span>
            </div>
            <div>
              <span className='about-info-title'>20+</span>
              <span className='about-info-name'>
                completed <br /> project{' '}
              </span>
            </div>
            <div>
              <span className='about-info-title'>05+</span>
              <span className='about-info-name'>
                companies <br /> worked{' '}
              </span>
            </div>
          </div>

          <div className='about-button-container'>
            <a href='#' download className='button about-button'>
              Download CV <i className='uil uil-download-alt button-icon'></i>
            </a>
          </div>
        </div>
      </div>
    </SectionAboutStyle>
  );
};

export default About;
