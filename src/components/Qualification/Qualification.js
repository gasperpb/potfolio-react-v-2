import { useState } from 'react';

import { SectionQualificationStyle } from './Qualification.style';

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  return (
    <SectionQualificationStyle className='section'>
      <h2 className='section-title'>Qualification</h2>
      <span className='section-subtitle'>My personal journey</span>

      <div className='qualification-container container'>
        <div className='qualification-tabs'>
          <div
            className='qualification-button'
            style={{ color: `${toggle === 1 ? 'var(--first-color)' : ''}` }}
            onClick={() => setToggle(1)}
          >
            <i className='uil uil-graduation-cap qualification-icon'></i>
            Education
          </div>
          <div
            className='qualification-button'
            style={{ color: `${toggle === 2 ? 'var(--first-color)' : ''}` }}
            onClick={() => setToggle(2)}
          >
            <i className='uil uil-briefcase-alt qualification-icon'></i>
            Work
          </div>
        </div>

        <div className='qualification-section'>
          {/* content 1 */}
          <div
            className={`qualification-content ${
              toggle === 1 ? 'active' : 'inactive'
            }`}
          >
            {/* data 1 */}
            <div className='qualification-data'>
              <div>
                <h3 className='qualification-title'>Computer Enginner</h3>
                <span className='qualification-subtitle'>
                  Peru - University
                </span>
                <div className='qualification-calendar'>
                  <i className='uil uil-calendar-alt'></i> 2009 - 2004
                </div>
              </div>

              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>
            </div>

            {/* data 2 */}
            <div className='qualification-data'>
              <div></div>

              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>

              <div>
                <h3 className='qualification-title'>Web Design</h3>
                <span className='qualification-subtitle'>
                  Spain - Institute
                </span>
                <div className='qualification-calendar'>
                  <i className='uil uil-calendar-alt'></i> 2009 - 2004
                </div>
              </div>
            </div>

            {/* data 3 */}
            <div className='qualification-data'>
              <div>
                <h3 className='qualification-title'>Web Development</h3>
                <span className='qualification-subtitle'>
                  Youtube - institute
                </span>
                <div className='qualification-calendar'>
                  <i className='uil uil-calendar-alt'></i> 2017 - 2019
                </div>
              </div>

              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>
            </div>

            {/* data 4 */}
            <div className='qualification-data'>
              <div></div>

              <div>
                <span className='qualification-rounder'></span>
                {/* <span className='qualification-line'></span> */}
              </div>

              <div>
                <h3 className='qualification-title'>Master in Ui/Ux</h3>
                <span className='qualification-subtitle'>
                  Lombok - Institute
                </span>
                <div className='qualification-calendar'>
                  <i className='uil uil-calendar-alt'></i> 2022 - 2024
                </div>
              </div>
            </div>
          </div>

          {/* content 2 */}
          <div
            className={`qualification-content ${
              toggle === 2 ? 'active' : 'inactive'
            }`}
          >
            {/* data 1 */}
            <div className='qualification-data'>
              <div>
                <h3 className='qualification-title'>Software Enginner</h3>
                <span className='qualification-subtitle'>
                  Apple - University
                </span>
                <div className='qualification-calendar'>
                  <i className='uil uil-calendar-alt'></i> 2009 - 2004
                </div>
              </div>

              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>
            </div>

            {/* data 2 */}
            <div className='qualification-data'>
              <div></div>

              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>

              <div>
                <h3 className='qualification-title'>Frontend Developer</h3>
                <span className='qualification-subtitle'>
                  Spain - Institute
                </span>
                <div className='qualification-calendar'>
                  <i className='uil uil-calendar-alt'></i> 2009 - 2004
                </div>
              </div>
            </div>

            {/* data 3 */}
            <div className='qualification-data'>
              <div>
                <h3 className='qualification-title'>Ui Designer</h3>
                <span className='qualification-subtitle'>
                  Figma - institute
                </span>
                <div className='qualification-calendar'>
                  <i className='uil uil-calendar-alt'></i> 2017 - 2019
                </div>
              </div>

              <div>
                <span className='qualification-rounder'></span>
                {/* <span className='qualification-line'></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionQualificationStyle>
  );
};

export default Qualification;
