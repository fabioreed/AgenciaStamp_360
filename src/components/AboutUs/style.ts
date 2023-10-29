import styled from "styled-components"

export const Main = styled.main`
  padding: 0rem;
`
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

export const SectionWagner = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;

    padding: 6rem 11rem;

    > p {
      font-size: 1rem;

      width: 50%;
    }
  }
`

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > img {
    width: 100%;

    box-shadow: var(--primary-color) 0px 0px 120px -80px;

    border: thin var(--primary-color);
  }

  @media (min-width: 768px) {
    width: 1230px;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`

export const DescriptionAndBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

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

  > button {
     display: flex;
    align-items: center;
    gap: .6rem;

    background: var(--primary-color);

    color: var(--black);

    border: 1px solid transparent;

    color: var(--black);
    font-size: .8rem;
    font-weight: 600;

    padding: .6rem 1.7rem;
    width: fit-content;

    box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.3);

    transition: .4s ease;

    border-radius: 10px;
    border: 2px solid transparent;

    cursor: pointer;

    &:hover {
      background-color: var(--black);

      color: var(--primary-color);

      border-radius: 16px 2px 16px 2px;
      border: 2px solid var(--primary-color);
    }
  }

  @media (min-width: 768px) {
    > p {
      font-size: 1rem;

      line-height: 170%;

      width: 80%;
    }
  }
`