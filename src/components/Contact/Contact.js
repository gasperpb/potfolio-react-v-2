import { SectionContactStyle } from './Contact.style';

const Contact = () => {
  return (
    <SectionContactStyle className='contact section' id='contact'>
      <h2 className='section-title'>Contact Me</h2>
      <span className='section-subtitle'>Get in touch.</span>

      <div className='contact-container container row'>
        <div>
          {/* contact 1 */}
          <div className='contact-information'>
            <i className='uil uil-phone contact-icon'></i>
            <div>
              <h3 className='contact-title'>Call Me</h3>
              <span className='contact-subtitle'>990-998-388</span>
            </div>
          </div>
          {/* contact 2 */}
          <div className='contact-information'>
            <i className='uil uil-envelope contact-icon'></i>
            <div>
              <h3 className='contact-title'>Email</h3>
              <span className='contact-subtitle'>johndoe@gmail.com</span>
            </div>
          </div>
          {/* contact 3 */}
          <div className='contact-information'>
            <i className='uil uil-map-marker contact-icon'></i>
            <div>
              <h3 className='contact-title'>Location</h3>
              <span className='contact-subtitle'>London - England</span>
            </div>
          </div>
        </div>
        <div className='contact-form row'>
          <div className='contact-form-container row'>
            <div className='contact-content'>
              <label htmlFor='name' className='contact-label'>
                Name
              </label>
              <input type='text' className='contact-input' />
            </div>
            <div className='contact-content'>
              <label htmlFor='email' className='contact-label'>
                Email
              </label>
              <input type='text' className='contact-input' />
            </div>
          </div>
          <div className='contact-content'>
            <label htmlFor='project' className='contact-label'>
              Project
            </label>
            <input type='text' className='contact-input' />
          </div>
          <div className='contact-content'>
            <label htmlFor='message' className='contact-label'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              cols='0'
              rows='7'
              className='contact-input'
            ></textarea>
          </div>

          <div>
            <a href='/#' className='button'>
              Send Message <i className='uil uil-message button-icon'></i>
            </a>
          </div>
        </div>
      </div>
    </SectionContactStyle>
  );
};

export default Contact;
