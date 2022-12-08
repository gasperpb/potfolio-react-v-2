import { useState } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Qualification from './components/Qualification/Qualification';
import Service from './components/Service/Service';
import Portfolio from './components/Portfolio/Portfolio';
import Project from './components/Project/Project';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [color, setColor] = useState(false);
  const changeHeaderColor = () => {
    if (window.scrollY > 560) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeHeaderColor);
  return (
    <>
      <Header />
      <div className='main'>
        <Hero />
        <About />
        <Skill />
        <Qualification />
        <Service />
        <Portfolio />
        <Project />
        <Testimonial />
        <Contact />
      </div>
      <Footer />
      <a href='#home' className={`scrollup ${color ? 'show-scroll' : ' '}`}>
        <i className='uil uil-arrow-up scrollup-icon'></i>
      </a>
    </>
  );
}

export default App;
