import styled from "styled-components"

export const SectionAboutUsContainer = styled.section`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > h2 {
    color: var(--gray);
    font-size: 1.2rem;

    > span {
      color: var(--primary-color);
    }
  }

  > p {
    color: var(--gray);
    line-height: 150%;
    font-size: .8rem;
  }

  @media (min-width: 768px) {
    > h2 {
      font-size: 2.4rem;
    }

    > p {
      font-size: 1rem;
    }
  }
`

export const ImageContainer = styled.figure`
  width: 50%;
  height: 100%;
  position: relative;
  
  > img {
    border-radius: 0 8px;
    width: 100%;
    object-fit: contain;
  }

  .color-filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98.5%;

    background-color: var(--primary-color);
    opacity: 0.3;

    border-radius: 0 8px;
  }
`