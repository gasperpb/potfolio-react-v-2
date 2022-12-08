import styled from 'styled-components';

const media = {
  small: '@media(max-width: 350px)',
  mobile: '@media(max-width: 768px)',
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1024px)',
};

export const SectionContactStyle = styled.section`
  .contact-container {
    row-gap: 3rem;
    ${media.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .contact-information {
    display: flex;
    margin-bottom: 2rem;
  }

  .contact-icon {
    font-size: 2rem;
    color: var(--first-color);
    margin-right: 0.75rem;
  }

  .contact-title {
    font-size: var(--h3-font-size);
    font-weight: 500;
  }

  .contact-subtitle {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
  }

  .contact-content {
    background-color: var(--input-color);
    border-radius: 0.5rem;
    padding: 0.75rem 1rem 0.25rem;
  }

  .contact-label {
    font-size: var(--smaller-font-size);
    color: var(--title-color);
  }

  .contact-input {
    width: 100%;
    background-color: var(--input-color);
    color: var(--text-color);
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    border: none;
    ouline: none;
    padding: 0.25rem 0.5rem 0.5rem 0;
    &:focus {
      outline: none;
    }
  }

  .contact-form {
    ${media.desktop} {
      width: 460px;
    }
  }

  .contact-form-container {
    ${media.desktop} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
