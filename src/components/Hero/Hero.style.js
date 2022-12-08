import styled from 'styled-components';

const media = {
  small: '@media(max-width: 350px)',
  mobile: '@media(max-width: 768px)',
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1024px)',
};

export const SectionHeroStyle = styled.section`
  .home-container {
    ${media.desktop} {
      row-gap: 5rem;
    }
  }
  .home-content {
    grid-template-columns: 0.5fr 3fr;
    padding-top: 3.5rem;
    align-items: center;

    ${media.tablet} {
      grid-template-columns: max-content 1fr 1fr;
    }

    ${media.desktop} {
      padding-top: 5.5rem;
      column-gap: 2rem;
    }

    ${media.small} {
      grid-template-columns: 0.25fr 3fr;
    }

    .home-social {
      display: grid;
      grid-template-columns: max-content;
      row-gap: 1rem;

      ${media.desktop} {
        transform: translateX(-6rem);
      }

      .home-social-icon {
        font-size: 1.25rem;
        color: var(--first-color);
      }

      .home-social-icon:hover {
        color: var(--first-color-alt);
      }
    }

    .home-img {
      justify-self: center;
      ${media.tablet} {
        order: 1;
      }

      .home-blob {
        width: 200px;
        fill: var(--first-color);

        ${media.desktop} {
          width: 320px;
        }

        ${media.tablet} {
          width: 270px;
        }

        ${media.small} {
          width: 180px;
        }

        .home-blob-img {
          width: 170px;
        }
      }
    }

    .home-data {
      grid-column: 1/3;

      ${media.tablet} {
        grid-column: initial;
      }

      .home-title {
        font-size: var(--big-font-size);
      }

      .home-subtitle {
        font-size: var(--h3-font-size);
        color: var(--text-color);
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-0-75);
      }

      .home-description {
        margin-bottom: var(--mb-2);
      }

      .button-home {
        display: inline-flex;
        align-items: center;

        .button-icon {
          font-size: 1.25rem;
          margin-left: var(--mb-0-5);
          transition: 0.3s;
        }
      }
    }
  }

  .home-scroll {
    display: none;

    ${media.tablet} {
      display: block;
    }

    .home-scroll-button {
      color: var(--first-color);
      transition: 0.3s;
      display: flex;
      align-items: center;
      width: max-content;

      &:hover {
        transform: translateY(0.25rem);
      }

      ${media.tablet} {
        margin-left: 3rem;
      }
    }

    .home-scroll-mouse {
      font-size: 2rem;
    }

    .home-scroll-name {
      font-size: var(--small-font-size);
      color: var(--title-color);
      font-weight: var(--font-medium);
      margin-right: var(--mb-0-25);
    }

    .home-scroll-arrow {
      font-size: 1.25rem;
    }
  }
`;
