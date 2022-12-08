import styled from 'styled-components';

const media = {
  small: '@media(max-width: 350px)',
  mobile: '@media(max-width: 768px)',
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1024px)',
};

export const SectionServiceStyle = styled.section`
  .services-container {
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);

    ${media.small} {
      grid-template-columns: max-content;
      justify-content: center;
    }

    ${media.tablet} {
      grid-template-columns: repeat(3, 218px);
      justify-content: center;
    }

    .services-content {
      position: relative;
      background-color: var(--container-color);
      padding: 3.5rem 0.5rem 1.25rem 1.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      border-radius: 0.25rem;
      transition: 0.3s;

      ${media.small} {
        padding-right: 3.5rem;
      }

      ${media.tablet} {
        padding: 6rem 0 2rem 2.5rem;
      }

      &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      .services-icon {
        display: block;
        font-size: 1.5rem;
        color: var(--first-color);
        margin-bottom: 1rem;

        ${media.tablet} {
          font-size: 2rem;
        }
      }

      .services-title {
        font-size: var(--h3-font-size);
        margin-bottom: 1rem;
        font-weight: 500;
      }

      .service-button {
        display: inline-flex;
        padding: 0;
        background-color: transparent;
        color: var(--first-color);
        cursor: pointer;
        font-size: var(--small-font-size);

        &:hover {
          .button-icon {
            transform: translateX(0.25rem);
          }
          color: var(--first-color-alt);
        }
      }

      .services-modal.active {
        visibility: visible !important;
        opacity: 1;
      }

      .services-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        z-index: 3;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s;

        .services-modal-content {
          position: relative;
          background-color: var(--container-color);
          padding: 1.5rem;
          border-radius: 0.5rem;

          ${media.tablet} {
            width: 450px;
          }

          ${media.desktop} {
            width: 550px;
          }

          .services-modal-title {
            font-size: var(--h3-font-size);
            font-weight: 500;
            margin-bottom: 1.5rem;
          }

          .services-modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 1.5rem;
            color: var(--first-color);
            cursor: pointer;
          }

          .services-modal-service {
            display: flex;

            .services-modal-icon {
              color: var(--first-color);
              margin-right: 0.25rem;
            }
          }
        }
      }
    }
  }
`;
