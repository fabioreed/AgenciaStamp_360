import styled from "styled-components"

export const SectionAboutUsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  padding: 1rem 3rem;
  width: 100%;

  background: rgba(10, 10, 10, 10);



  .hidden {
    opacity: 0;
    transition: all 1s;
    filter: blur(5px);
    transform: translateX(-100%);
  }

  .show {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }

  .logo {
    display: flex;
  }

  .logo:nth-child(2) {
    transition-delay: 200ms;
  }
  .logo:nth-child(3) {
    transition-delay: 400ms;
  }
  .logo:nth-child(4) {
    transition-delay: 600ms;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    
    padding: 2rem 12rem;

    height: 100vh;
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

    display: flex;
    gap: .5rem;

    > span {
      color: var(--primary-color);
      font-weight: 600;
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

  box-shadow: var(--primary-color) 0px 0px 200px -50px;

  border: thin var(--primary-color);
  
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .color-filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98.5%;

    background-color: var(--primary-color);
    opacity: .2;
  }

  @media (min-width: 970px) {
    width: 100%;
  }
`