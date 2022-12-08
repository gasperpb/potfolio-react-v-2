import { useState } from 'react';
import { SectionSkillStyle } from './Skill.style';

const Skill = () => {
  const [toggle, setToggle] = useState(1);

  return (
    <SectionSkillStyle className='section' id='skills'>
      <h2 className='section-title'>Skills</h2>
      <span className='section-subtitle'>My technical level</span>

      <div className='skill-container container row'>
        <div>
          <div
            className={`skill-content ${
              toggle === 1 ? 'skill-open' : 'skill-close'
            }`}
            onClick={() => setToggle(1)}
          >
            <div className='skill-header'>
              <i className='uil uil-brackets-curly skill-icon'></i>

              <div>
                <h1 className='skill-title'>Frontend developer</h1>
                <span className='skill-subtitle'>More than 4 years</span>
              </div>

              <i className='uil uil-angle-down skill-arrow'></i>
            </div>

            <div className='skill-list row'>
              <div className='skill-data'>
                <div className='skill-title-alt'>
                  <h3 className='skill-name'>HTML</h3>
                  <span className='skill-number'>90%</span>
                </div>
                <div className='skill-bar'>
                  <span className='skill-percentage skill-html'></span>
                </div>
              </div>

              <div className='skill-data'>
                <div className='skill-title-alt'>
                  <h3 className='skill-name'>CSS</h3>
                  <span className='skill-number'>80%</span>
                </div>
                <div className='skill-bar'>
                  <span className='skill-percentage skill-css'></span>
                </div>
              </div>

              <div className='skill-data'>
                <div className='skill-title-alt'>
                  <h3 className='skill-name'>Javascript</h3>
                  <span className='skill-number'>90%</span>
                </div>
                <div className='skill-bar'>
                  <span className='skill-percentage skill-js'></span>
                </div>
              </div>

              <div className='skill-data'>
                <div className='skill-title-alt'>
                  <h3 className='skill-name'>React</h3>
                  <span className='skill-number'>85%</span>
                </div>
                <div className='skill-bar'>
                  <span className='skill-percentage skill-react'></span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`skill-content ${
              toggle === 2 ? 'skill-open' : 'skill-close'
            }`}
            onClick={() => setToggle(2)}
          >
            <div className='skill-header'>
              <i className='uil uil-server-network skill-icon'></i>

              <div>
                <h1 className='skill-title'>Backend developer</h1>
                <span className='skill-subtitle'>More than 2 years</span>
              </div>

              <i className='uil uil-angle-down skill-arrow'></i>
            </div>

            <div className='skill-list row'>
              <div className='skill-data'>
                <div className='skill-title-alt'>
                  <h3 className='skill-name'>PHP</h3>
                  <span className='skill-number'>90%</span>
                </div>
                <div className='skill-bar'>
                  <span className='skill-percentage skill-php'></span>
                </div>
              </div>

              <div className='skill-data'>
                <div className='skill-title-alt'>
                  <h3 className='skill-name'>Node Js</h3>
                  <span className='skill-number'>85%</span>
                </div>
                <div className='skill-bar'>
                  <span className='skill-percentage skill-node'></span>
                </div>
              </div>

              <div className='skill-data'>
                <div className='skill-title-alt'>
                  <h3 className='skill-name'>Firebase</h3>
                  <span className='skill-number'>70%</span>
                </div>
                <div className='skill-bar'>
                  <span className='skill-percentage skill-firebase'></span>
                </div>
              </div>

              <div className='skill-data'>
                <div className='skill-title-alt'>
                  <h3 className='skill-name'>Mysql</h3>
                  <span className='skill-number'>85%</span>
                </div>
                <div className='skill-bar'>
                  <span className='skill-percentage skill-mysql'></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`skill-content ${
              toggle === 3 ? 'skill-open' : 'skill-close'
            }`}
            onClick={() => setToggle(3)}
          >
            <div className='skill-header'>
              <i className='uil uil-swatchbook skill-icon'></i>

              <div>
                <h1 className='skill-title'>Designer</h1>
                <span className='skill-subtitle'>More than 5 years</span>
              </div>

              <i className='uil uil-angle-down skill-arrow'></i>
            </div>

            <div className='skill-list row'>
              <div className='skill-data'>
                <div className='skill-title'>
                  <h3 className='skill-name'>Figma</h3>
                  <span className='skill-number'>90%</span>
                </div>
                <div className='skill-bar'>
                  <span className='skill-percentage skill-figma'></span>
                </div>
              </div>

              <div className='skill-data'>
                <div className='skill-title'>
                  <h3 className='skill-name'>Sketch</h3>
                  <span className='skill-number'>85%</span>
                </div>
                <div className='skill-bar'>
                  <span className='skill-percentage skill-sketch'></span>
                </div>
              </div>

              <div className='skill-data'>
                <div className='skill-title'>
                  <h3 className='skill-name'>Photoshop</h3>
                  <span className='skill-number'>80%</span>
                </div>
                <div className='skill-bar'>
                  <span className='skill-percentage skill-photoshop'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionSkillStyle>
  );
};

export default Skill;
