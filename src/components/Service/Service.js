import { useState } from 'react';
import { SectionServiceStyle } from './Service.style';
const Service = () => {
  const [toggle, setToggle] = useState(0);

  return (
    <SectionServiceStyle className='services section' id='services'>
      <h2 className='section-title'>Services</h2>
      <span className='section-subtitle'>What i offer</span>

      <div className='services-container container row'>
        {/* service 1 */}
        <div className='services-content'>
          <div>
            <i className='uil uil-web-grid services-icon'></i>
            <h3 className='services-title'>
              Ui/Ux <br /> Designer
            </h3>
          </div>
          <span
            className='button service-button button-link'
            onClick={() => setToggle(1)}
          >
            View More
            <i className='uil uil-arrow-right button-icon'></i>
          </span>

          <div
            className={`services-modal ${
              toggle === 1 ? ' active' : 'inactive'
            }`}
          >
            <div className='services-modal-content'>
              <h4 className='services-modal-title'>
                Ui/Ux <br /> Designer
              </h4>
              <i
                className='uil uil-times services-modal-close'
                onClick={() => setToggle(0)}
              ></i>

              <ul className='services-modal-services row'>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p>I develop the user interface.</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p>Wep page development.</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p>I create ux element interactions.</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* services 2 */}
        <div className='services-content'>
          <div>
            <i className='uil uil-arrow services-icon'></i>
            <h3 className='services-title'>
              Frontend <br /> Development
            </h3>
          </div>
          <span
            className='button service-button button-link'
            onClick={() => setToggle(2)}
          >
            View More
            <i className='uil uil-arrow-right button-icon'></i>
          </span>

          <div
            className={`services-modal ${
              toggle === 2 ? ' active' : 'inactive'
            }`}
          >
            <div className='services-modal-content'>
              <h4 className='services-modal-title'>
                Frontend <br /> Development
              </h4>
              <i
                className='uil uil-times services-modal-close'
                onClick={() => setToggle(0)}
              ></i>

              <ul className='services-modal-services row'>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p>I develop the user interface.</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p>Wep page development.</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p>I create ux element interactions.</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* services 3 */}
        <div className='services-content'>
          <div>
            <i className='uil uil-pen services-icon'></i>
            <h3 className='services-title'>
              Branding <br /> Designer
            </h3>
          </div>
          <span
            className='button service-button button-link'
            onClick={() => setToggle(3)}
          >
            View More
            <i className='uil uil-arrow-right button-icon'></i>
          </span>

          <div
            className={`services-modal ${
              toggle === 3 ? ' active' : 'inactive'
            }`}
          >
            <div className='services-modal-content'>
              <h4 className='services-modal-title'>
                Branding <br /> Designer
              </h4>
              <i
                className='uil uil-times services-modal-close'
                onClick={() => setToggle(0)}
              ></i>

              <ul className='services-modal-services row'>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p>I develop the user interface.</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p>Wep page development.</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p>I create ux element interactions.</p>
                </li>
                <li className='services-modal-service'>
                  <i className='uil uil-check-circle services-modal-icon'></i>
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionServiceStyle>
  );
};

export default Service;
