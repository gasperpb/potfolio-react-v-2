import styled from 'styled-components';

const media = {
  small: '@media(max-width: 350px)',
  mobile: '@media(max-width: 768px)',
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1024px)',
};

export const SectionProjectStyle = styled.section`
  text-align: center;

  ${media.tablet} {
    text-align: initial;
  }

  .project-container {
    ${media.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${media.desktop} {
      background-color: var(--first-color-second);
      border-radius: 1rem;
      padding: 3rem 2.5rem 0;
      column-gap: 3rem;
      grid-template-columns: 1fr max-content;
    }

    .project-data {
      ${media.desktop} {
        padding-top: 0.8rem;
      }
    }
  }

  .project-bg {
    background-color: var(--first-color-second);
    padding-top: 3rem;

    ${media.desktop} {
      background: none;
    }
  }

  .project-title {
    font-size: var(--h2-font-size);
    margin-bottom: 0.75rem;
  }

  .project-description {
    margin-bottom: 1.5rem;
    font-size: 0.938rem;
  }

  .project-title,
  .project-description {
    color: #fff;
  }

  .project-img {
    width: 232px;
    justify-self: center;

    ${media.small} {
      width: 200px;
    }
    ${media.tablet} {
    }
  }

  .project-button {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1rem;
    background-color: #fff;
    color: var(--first-color);
  }
`;
