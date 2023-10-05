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

  padding: 1rem;

  animation: ${fadeIn} .9s ease-in-out;

  @media (min-width: 768px) {
    padding: 2rem 12rem;

    gap: 3rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h1 {
    color: transparent;
    background-image: url('https://images.pexels.com/photos/1774986/pexels-photo-1774986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover;
    background-clip: text;
    background-attachment: fixed;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    font-size: 2.5rem;

    > span {
      color: var(--primary-color);
      font-style: italic;
      font-weight: 800;
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
  font-size: 1rem;
  font-weight: 600;

  padding: .7rem 2.4rem;
  width: fit-content;

  border-radius: 10px;
  border: 2px solid transparent;

  box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.3);

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

export const PartnersCompanies = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.2rem;

  .fade-in {
  opacity: 0;
  transform: translateY(20px); /* Inicialmente, move a div para baixo */
  transition: opacity 0.5s ease, transform 0.5s ease;
    /* Outros estilos apropriados, como cor de fundo, tamanho, etc. */
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0); /* Quando a div fica visível, move para cima */
  }

  > h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--white);
  }
  
  > figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    color: var(--white);
    font-size: 2rem;
    
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      gap: 1rem;
    }

    > div > img {
      width: 70px;

      opacity: .5;

      &:nth-child(2) {
        width: 100px;
      }
    }
  }

  @media (min-width: 768px) {
    > h3 {
      font-size: 2.1rem;
      font-weight: 300;
    }

    > figure {
      gap: 0;
    }

    > figure > div {
      flex-direction: row;
      gap: 2rem;
    }

    > figure > div > img {
      width: 200px;

      &:nth-child(2) {
        width: 260px;
      }
    }
  }
`