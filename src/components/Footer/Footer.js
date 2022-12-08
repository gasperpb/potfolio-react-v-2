import { FooterStyle } from './Footer.style';

const Footer = () => {
  return (
    <FooterStyle className='footer'>
      <div className='footer-bg'>
        <div className='footer-container container row'>
          <div>
            <h1 className='footer-title'>Jane Doe</h1>
            <span className='footer-subtitle'>Frontend Developer</span>
          </div>

          <ul className='footer-list'>
            <li>
              <a href='#services' className='footer-link'>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='footer-link'>
                Portfolio
              </a>
            </li>
            <li>
              <a href='#contact' className='footer-link'>
                Contact
              </a>
            </li>
          </ul>

          <div className='footer-social-container'>
            <a href='https://www.facebook.com' className='footer-social'>
              <i className='uil uil-facebook-f'></i>
            </a>
            <a href='https://www.instagram.com' className='footer-social'>
              <i className='uil uil-instagram'></i>
            </a>
            <a href='https://www.twitter.com' className='footer-social'>
              <i className='uil uil-twitter-alt'></i>
            </a>
          </div>
        </div>

        <p className='footer-copy'>&#169; Samantha. All right reserved.</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
