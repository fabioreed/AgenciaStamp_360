import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  animation: ${fadeIn} .9s ease-in-out;

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
    gap: 3rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1rem;

  /* Defina o gradiente de três cores como o plano de fundo */
  background: rgb(63,94,251);
  background: radial-gradient(circle, var(--hover) 0%, rgba(18,18,20,1) 28%);

  /* Adicione o efeito de desfoque */
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    filter: blur(10px); /* Ajuste o valor de desfoque desejado */
  }

  > h1 {
    color: var(--gray);
    font-size: 2.5rem;
    z-index: 2;

    .frontend-text {
      background: linear-gradient(90deg, var(--blue) 0%, var(--black) 60%);
      color: transparent;
      font-weight: 700;
      -webkit-background-clip: text; /* Para aplicar o gradiente ao texto */
      background-clip: text; /* Para aplicar o gradiente ao texto */
    }

    > span {
      color: var(--primary-color);
      font-weight: 700;
    }
  }

  > p {
    color: var(--gray);
    font-size: .9rem;
    line-height: 170%;

    > span {
      color: var(--primary-color);
      font-style: italic;
      font-weight: 700;
    }
  }

  @media (min-width: 768px) {
    padding: 2rem 12rem;

    > h1 {
      font-size: 4.4rem;
    }

    > p {
      font-size: 1.4rem;
    }
  }
`

export const KnowMoreBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  margin: 0 auto;

  background-color: var(--primary-color);

  color: var(--black);
  font-size: .85rem;
  font-weight: 500;

  padding: .7rem 2.4rem;
  width: fit-content;

  border-radius: 16px;
  border: 2px solid transparent;

  z-index: 2;

  /* box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.1); */

  transition: .4s ease;

  :nth-child(1) {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: var(--black);

    color: var(--primary-color);

    border-radius: 16px 2px 16px 2px;
    border: 2px solid var(--primary-color);
  }

  @media (min-width: 768px) {
    padding: 1rem 4rem;

    font-size: 1.1rem;

    justify-content: flex-start;

    margin: 0 0;
  }
`

const backgroundImage = 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

export const PartnersCompanies = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.2rem;

  /* background: transparent; */
  position: relative;
  background: url(${backgroundImage}) center/cover no-repeat;

  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    filter: blur(6px);
  }

  height: 100vh;
  width: 100vw;

  > h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--gray);
    text-align: start;
  }

  > figure {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    color: var(--white);
    font-size: 2rem;

    > img {
      display: none;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      gap: 1rem;
    }

    > div > img {
      width: 150px;

      /* background: var(--black); */

      padding: 1rem;

      border-radius: 12px;

      &:nth-child(2) {
        width: 150px;
      }
    }
  }

  @media (min-width: 768px) {
    > h3 {
      
      font-size: 2.1rem;
    }

    > figure {
      gap: 0;

      > img {
        width: 320px;
        display: flex;
      }
    }

    > figure > div {
      flex-direction: row;
      justify-content: space-between;
      gap: 2rem;
    }

    > figure > div > img {
      /* width: 220px; */

      &:nth-child(2) {
        width: 260px;
      }
    }
  }
`

