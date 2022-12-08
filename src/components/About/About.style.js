import styled from 'styled-components';

const media = {
  small: '@media(max-width: 350px)',
  mobile: '@media(max-width: 768px)',
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1024px)',
};

export const SectionAboutStyle = styled.section`
  .about-container {
    ${media.tablet} {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 5rem;
    }
  }
  .about-image {
    width: 200px;
    border-radius: 0.5rem;
    justify-self: center;
    ${media.tablet} {
      width: 350px;
    }
  }

  .about-description {
    text-align: center;
    margin-bottom: 2.5rem;
    ${media.tablet} {
      text-align: initial;
    }
  }

  .about-info {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2.5rem;

    ${media.tablet} {
      justify-content: space-between;
    }
  }

  .about-info-title {
    font-size: var(--h2-font-size);
    font-weight: 600;
    color: var(--title-color);
  }

  .about-info-name {
    font-size: var(--smaller-font-size);
  }

  .about-info-title,
  .about-info-name {
    display: block;
    text-align: center;
  }

  .about-button-container {
    display: flex;
    justify-content: center;
    ${media.tablet} {
      justify-content: initial;
    }
  }

  .button-icon {
    font-size: 1.25rem;
  }
`;
