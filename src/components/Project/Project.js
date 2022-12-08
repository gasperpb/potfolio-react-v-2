import ProjectImage from '../../assets/img/project.png';
import { SectionProjectStyle } from './Project.style';
const Project = () => {
  return (
    <SectionProjectStyle className='project section'>
      <div className='project-bg'>
        <div className='project-container container row'>
          <div className='project-data'>
            <h2 className='project-title'>You have a new project</h2>
            <p className='project-description'>
              Contact me now and get a 30% discount on your new project.
            </p>
            <a href='#contact' className='button project-button'>
              Contact Me
              <i className='uil uil-message project-icon button-icon'></i>
            </a>
          </div>

          <img src={ProjectImage} alt='project' className='project-img' />
        </div>
      </div>
    </SectionProjectStyle>
  );
};

export default Project;
