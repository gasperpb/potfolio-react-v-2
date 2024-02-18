import AboutImage from "../../assets/img/about.jpg";

import { SectionAboutStyle } from "./About.style";
const About = () => {
  return (
    <SectionAboutStyle className="section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My introduction</span>
      <div className="about-container container row">
        <img src={AboutImage} alt="about" className="about-image" />

        <div className="about-data">
          <p className="about-description">
            Analista de sistemas, desenvolvedor apaixonado, autodidata
            comunicativo querendo compartilhar seu conhecimento. Sempre buscando
            evoluir e melhorar em todos os aspectos, Desenvolvimento de software
            em. • Javascript com HTML e CSS • React • Node.js • Vue.js • Java •
            Python • Delphi • Mysql • SQL •Postgresql
          </p>

          <div className="about-info">
            <div>
              <span className="about-info-title">03+</span>
              <span className="about-info-name">
                years <br /> experience{" "}
              </span>
            </div>
            <div>
              <span className="about-info-title">20+</span>
              <span className="about-info-name">
                completed <br /> project{" "}
              </span>
            </div>
            <div>
              <span className="about-info-title">05+</span>
              <span className="about-info-name">
                companies <br /> worked{" "}
              </span>
            </div>
          </div>

          <div className="about-button-container">
            <a
              href="https://drive.google.com/file/d/1LktbyKMI2h7Nf42fFHs4dWGZBf94IVEE/view?usp=sharing"
              download
              className="button about-button"
            >
              Download CV <i className="uil uil-download-alt button-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </SectionAboutStyle>
  );
};

export default About;
