import styled from "styled-components"

export const SectionAboutUsContainer = styled.section`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  height: 100vh;

  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem 12rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > h2 {
    color: var(--gray);
    font-size: 1.2rem;
    font-weight: 300;

    > span {
      color: var(--primary-color);
    }
  }

  > p {
    color: var(--gray);
    line-height: 150%;
    font-size: .8rem;
    font-weight: 400;

    > span {
      font-weight: 600;
      color: var(--primary-color);
    }
  }

  @media (min-width: 768px) {
    > h2 {
      font-size: 2.1rem;
    }

    > p {
      font-size: 1rem;
    }
  }
`

export const ImageContainer = styled.figure`
  height: 55%;
  position: relative;
  
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
  }

  .color-filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98.5%;

    background-color: var(--primary-color);
    opacity: .2;

    display: none;
  }

  @media (min-width: 970px) {
    width: 100%;

    > img {
      display: flex;
    }

    .color-filter {
      display: flex;
    }
  }
`