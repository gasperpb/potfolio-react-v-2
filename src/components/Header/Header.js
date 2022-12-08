import { useState } from 'react';
import { HeaderStyle } from './Header.style';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(1);
  const [color, setColor] = useState(false);
  const [dark, setDark] = useState(false);

  if (dark) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }

  const changeHeaderColor = () => {
    if (window.scrollY > 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeHeaderColor);

  const clickHandle = (toggleValue, activeValue) => {
    setToggle(toggleValue);
    setActive(activeValue);
  };
  return (
    <HeaderStyle
      scrollHeader={color ? 'active' : ''}
      showMenu={toggle ? 'show-menu' : ''}
    >
      <nav className='container'>
        <a href='#home' className='nav-logo'>
          Jane Doe
        </a>

        <div className='nav-menu'>
          <ul className='nav-list row'>
            <li className='nav-item'>
              <a
                href='#home'
                className={`nav-link ${active === 1 ? 'active-link' : ''}`}
                onClick={() => clickHandle(false, 1)}
              >
                <i className='uil uil-estate nav-icon'></i> Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#about'
                className={`nav-link ${active === 2 ? 'active-link' : ''}`}
                onClick={() => clickHandle(false, 2)}
              >
                <i className='uil uil-user nav-icon'></i> About
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#skills'
                className={`nav-link ${active === 3 ? 'active-link' : ''}`}
                onClick={() => clickHandle(false, 3)}
              >
                <i className='uil uil-file-alt nav-icon'></i> Skills
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#services'
                className={`nav-link ${active === 4 ? 'active-link' : ''}`}
                onClick={() => clickHandle(false, 4)}
              >
                <i className='uil uil-briefcase-alt nav-icon'></i> Services
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#portfolio'
                className={`nav-link ${active === 5 ? 'active-link' : ''}`}
                onClick={() => clickHandle(false, 5)}
              >
                <i className='uil uil-scenery nav-icon'></i> Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#contact'
                className={`nav-link ${active === 6 ? 'active-link' : ''}`}
                onClick={() => clickHandle(false, 6)}
              >
                <i className='uil uil-message nav-icon'></i> Contactme
              </a>
            </li>
          </ul>
          <i
            className='uil uil-times nav-close'
            onClick={() => setToggle(false)}
          ></i>
        </div>

        <div className='nav-toggle-container'>
          <i
            className={`uil ${dark ? ' uil-sun' : ' uil-moon'} change-theme`}
            onClick={() => setDark(!dark)}
          ></i>
          <div className='nav-toggle' onClick={() => setToggle(true)}>
            <i className='uil uil-apps'></i>
          </div>
        </div>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
