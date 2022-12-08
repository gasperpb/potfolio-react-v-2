import styled from 'styled-components';

const media = {
  small: '@media(max-width: 350px)',
  mobile: '@media(max-width: 768px)',
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1024px)',
};

export const FooterStyle = styled.footer`
  padding-top: 2rem;

  .footer-container {
    row-gap: 3.5rem;

    ${media.tablet} {
      padding: 0 1rem;
      grid-template-columns: repeat(3, 1fr);
    }

    ${media.desktop} {
      padding: 0;
    }
  }

  .footer-bg {
    background-color: var(--first-color-second);
    padding: 2rem 0 3rem;

    ${media.tablet} {
      padding: 3rem 0 3.5rem;
    }
  }

  .footer-title {
    font-size: var(--h1-font-size);
  }

  .footer-subtitle {
    font-size: var(--small-font-size);
  }

  .footer-list {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;

    ${media.tablet} {
      flex-direction: row;
      column-gap: 2rem;
    }
  }

  .footer-link:hover {
    color: var(--first-color-lighter);
  }

  .footer-social-container {
    ${media.tablet} {
      justify-self: flex-end;
    }
  }

  .footer-social {
    font-size: 1.25rem;
    margin-right: 1.5rem;

    &:hover {
      color: var(--first-color-lighter);
    }
  }

  .footer-copy {
    font-size: var(--smaller-font-size);
    text-align: center;
    color: var(--text-color-light);
    margin-top: 3rem;

    ${media.tablet} {
      margin-top: 4.5rem;
    }
  }

  .footer-title,
  .footer-subtitle,
  .footer-link,
  .footer-social {
    color: #fff;
  }
`;
