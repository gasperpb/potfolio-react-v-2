import styled from 'styled-components';

const media = {
  small: '@media(max-width: 350px)',
  mobile: '@media(max-width: 768px)',
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1024px)',
};

export const SectionQualificationStyle = styled.section`
  .qualification-content.active {
    display: block;
  }

  .qualification-content.inactive {
    display: none;
  }

  .qualification-section {
    ${media.tablet} {
      display: grid;
      grid-template-columns: 0.5fr;
      justify-content: center;
    }
  }

  .qualification-tabs {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2rem;

    ${media.desktop} {
      justify-content: center;
    }
  }

  .qualification-button {
    font-size: var(--h3-font-size);
    font-weight: 500;
    cursor: pointer;

    ${media.desktop} {
      margin: 0 1rem;
    }

    &:hover {
      color: var(--first-color);
    }
  }

  .qualification-icon {
    font-size: 1.8rem;
    margin-right: 0.25rem;
  }

  .qualification-data {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;

    ${media.small} {
      gap: 0.5rem;
    }
  }

  .qualification-title {
    font-size: var(--normal-font-size);
    font-weight: 500;
  }

  .qualification-subtitle {
    display: inline-block;
    font-size: var(--small-font-size);
    margin-bottom: 1rem;
  }

  .qualification-calendar {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
  }

  .qualification-rounder {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: var(--first-color);
    border-radius: 50%;
  }

  .qualification-line {
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--first-color);
    transform: translate(6px, -7px);
  }
`;
