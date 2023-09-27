import { Link } from "react-router-dom"
import styled from "styled-components"

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem 12rem;

    gap: 6rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h1 {
    /* color: var(--white);
    font-size: 2.5rem; */
    position: relative;
    font-size: 2.5rem;
    color: transparent;
    display: inline-block;

    > span {
      /* color: var(--yellow);
      font-style: italic;
      font-weight: 600; */
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('https://images.pexels.com/photos/1774986/pexels-photo-1774986.jpeg?auto=compress&cs=tinysrgb&w=600');
      background-size: cover; /* Ajuste conforme necessário */
      background-clip: text; /* Isso faz com que a imagem apareça apenas onde o texto estiver */
      color: transparent;
      font-style: italic;
      font-weight: 600;
    }
  }

  > p {
    color: var(--gray);
    font-size: .9rem;
    line-height: 170%;
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

  background-color: var(--hover);

  color: var(--white);
  font-size: 1rem;
  font-weight: 600;

  padding: .7rem 2.4rem;
  width: fit-content;

  border-radius: 10px;

  box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.3);

  transition: .2s ease;

  :nth-child(1) {
    font-size: 1.6rem;
  }

  &:hover {
    background-color: var(--green);

    color: var(--blue);
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
  gap: 4rem;

  > h3 {
    font-size: .8rem;
    font-weight: 600;
    font-style: italic;
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
      font-size: 2.9rem;
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

