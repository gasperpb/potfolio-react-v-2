import styled from 'styled-components';

const media = {
  small: '@media(max-width: 350px)',
  mobile: '@media(max-width: 768px)',
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1024px)',
};

export const HeaderStyle = styled.header`
  width: 100%;
  background-color: var(--body-color);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;

  ${media.tablet} {
    bottom: initial;
    padding: 0 1rem;
  }

  nav {
    max-width: 968px;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.tablet} {
      height: calc(var(--header-height) + 1.5rem);
    }

    .nav-logo,
    .nav-toggle {
      color: var(--title-color);
      font-weight: var(--font-medium);
      &:hover {
        color: var(--first-color);
      }
    }

    .nav-toggle {
      font-size: 1.1rem;
      cursor: pointer;
    }

    .nav-menu {
      ${media.mobile} {
        position: fixed;
        bottom: ${(props) => (props.showMenu === 'show-menu' ? '0' : '-100%')};
        left: 0;
        width: 100%;
        background-color: var(--body-color);
        padding: 2rem 1.5rem 4rem;
        box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
        border-radius: 1.5rem 1.5rem 0 0;
        transition: 0.3s;
      }
      ${media.small} {
        padding: 2rem 0.25rem 4rem;
      }

      ${media.tablet} {
        margin-left: auto;
      }

      .nav-list {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;

        ${media.tablet} {
          display: flex;
          column-gap: 2rem;
        }

        ${media.small} {
          column-gap: 0;
        }

        .nav-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: var(--small-font-size);
          color: var(--title-color);
          font-weight: var(--font-medium);
          &:hover {
            color: var(--first-color);
          }

          .nav-icon {
            font-size: 1.2rem;
          }
        }
        .nav-link.active-link {
          color: var(--first-color);
        }
      }

      .nav-close {
        position: absolute;
        right: 1.3rem;
        bottom: 0.5rem;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--first-color);
        &:hover {
          color: var(--first-color-alt);
        }
      }
    }
  }

  .nav-icon,
  .nav-close,
  .nav-toggle {
    ${media.tablet} {
      display: none;
    }
  }

  box-shadow: ${(props) =>
    props.scrollHeader === 'active' ? '0 -1px 8px rgba(0,0,0,.15)' : ''};

  .nav-toggle-container {
    display: flex;
    align-items: center;
  }

  .change-theme {
    font-size: 1.25rem;
    color: var(--title-color);
    margin-right: 1rem;
    cursor: pointer;

    ${media.tablet} {
      margin-left: 2rem;
    }

    &:hover {
      color: var(--first-color);
    }
  }
`;
