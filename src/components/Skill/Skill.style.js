import styled from 'styled-components';

const media = {
  small: '@media(max-width: 350px)',
  mobile: '@media(max-width: 768px)',
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1024px)',
};

export const SectionSkillStyle = styled.section`
  .skill-container {
    row-gap: 0;

    ${media.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .skill-header {
    display: flex;
    align-items: center;
    margin-bottom: 2.5rem;
    cursor: pointer;
  }

  .skill-icon,
  .skill-arrow {
    font-size: 2rem;
    color: var(--first-color);
  }

  .skill-arrow {
    margin-left: auto;
    transition: 0.3s;
  }

  .skill-icon {
    margin-right: 0.75rem;
  }

  .skill-title {
    font-size: var(--h3-font-size);

    ${media.small} {
      font-size: var(--normal-font-size);
    }
  }

  .skill-subtitle {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
  }

  .skill-title-alt {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .skill-name {
    font-size: var(--normal-font-size);
    font-weight: 500;
  }

  .skill-bar,
  .skill-percentage {
    height: 5px;
    border-radius: 0.25rem;
  }

  .skill-bar {
    background-color: var(--first-color-lighter);
  }

  .skill-percentage {
    display: block;
    background-color: var(--first-color);
  }

  .skill-html {
    width: 90%;
  }
  .skill-css {
    width: 80%;
  }
  .skill-js {
    width: 90%;
  }
  .skill-react {
    width: 85%;
  }

  .skill-php {
    width: 90%;
  }
  .skill-node {
    width: 85%;
  }
  .skill-firebase {
    width: 70%;
  }
  .skill-mysql {
    width: 85%;
  }

  .skill-figma {
    width: 90%;
  }
  .skill-sketch {
    width: 85%;
  }
  .skill-photoshop {
    width: 80%;
  }

  .skill-close .skill-list {
    height: 0;
    overflow: hidden;
    transition: 0.3s;
  }

  .skill-open .skill-list {
    height: max-content;
    margin-bottom: 2.5rem;
    transition: 0.3s;
  }

  .skill-close .skill-arrow {
    transform: rotate(-90deg);
  }
`;
