import styled from 'styled-components';

const media = {
  small: '@media(max-width: 350px)',
  mobile: '@media(max-width: 768px)',
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1024px)',
};

export const SectionTestimonialStyle = styled.section`
  .testimonial-data,
  .testimonial-header {
    display: flex;
    ${media.small} {
      flex-direction: column;
      align-items: center;
    }
  }

  .testimonial-data,
  .testimonial-description {
    ${media.small} {
      text-align: center;
    }
  }

  .testimonial-data {
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .testimonial-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 0.75rem;
    ${media.small} {
      margin-right: 0;
      margin-bottom: 0.25rem;
    }
  }

  .testimonial-name {
    font-size: var(--h3-font-size);
    font-weight: 500;
  }

  .testimonial-client {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
  }

  .testimonial-description {
    margin-bottom: 2.5rem;
  }

  .testimonial-icon-star {
    color: var(--first-color);
  }

  .swiper-pagination-bullets-dynamic {
    overflow: initial;
  }

  .swiper-pagination-bullet {
    transform: scale(1.5);
  }

  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
    transform: scale(2);
  }
`;
