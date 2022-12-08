import styled from 'styled-components';

const media = {
  small: '@media(max-width: 350px)',
  mobile: '@media(max-width: 768px)',
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1024px)',
};

export const SectionPortfolioStyle = styled.section`
  .portfolio-container {
    .portfolio-content {
      padding: 0 1.5rem;

      ${media.tablet} {
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        column-gap: 5rem;
      }

      .portfolio-img {
        width: 265px;
        border-radius: 0.5rem;
        justify-self: center;

        ${media.tablet} {
          width: 320px;
        }
      }

      .portfolio-title {
        font-size: var(--h3-font-size);
        margin-bottom: 0.5rem;
      }

      .portfolio-description {
        margin-bottom: 0.75rem;
      }

      .portfolio-button {
        display: inline-flex;
        .button-icon {
          transition: 0.3s;
        }
        &:hover {
          .button-icon {
            transform: translateX(0.25rem);
          }
        }
      }
    }
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 1.3rem;

    ${media.desktop} {
      font-size: 2rem;
    }
  }

  .swiper {
    overflow: initial;
  }

  .swiper-pagination {
    ${media.tablet} {
      bottom: -37px;
    }
  }

  .swiper-button-next {
    ${media.tablet} {
      right: -1rem;
    }
    ${media.desktop} {
      right: -3.5rem;
    }
  }
  .swiper-button-prev {
    ${media.tablet} {
      left: -1rem;
    }

    ${media.tablet} {
      left: -3.5rem;
    }
  }
`;
