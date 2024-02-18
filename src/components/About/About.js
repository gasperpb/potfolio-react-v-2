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
            <p>
              Analista de sistemas e desenvolvedor apaixonado, sou um autodidata
              comunicativo em constante busca por evolução e aprimoramento.
              Tenho um profundo interesse em compartilhar meu conhecimento
              enquanto continuo a explorar e dominar uma variedade de aspectos
              no desenvolvimento de software, incluindo:
            </p>
            <ul>
              <li>JavaScript, HTML e CSS</li>
              <li>Frameworks como React, Vue.js e Node.js</li>
              <li>Linguagens como Java e Python</li>
              <li>Ferramentas tradicionais como Delphi</li>
              <li>
                Gerenciamento de bancos de dados, abrangendo MySQL, SQL e
                PostgreSQL
              </li>
            </ul>
            <p>
              Estou sempre entusiasmado em estudar e absorver novos
              conhecimentos, pois acredito que é nessa busca incessante que
              encontramos a verdadeira excelência no nosso trabalho.
            </p>
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
              href="https://drive.google.com/file/d/1u5m6ydFe0PXO2xyi_n4uIgYCZo6avh5J/view?usp=drive_link"
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
