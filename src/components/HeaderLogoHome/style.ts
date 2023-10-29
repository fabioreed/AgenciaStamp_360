import styled from "styled-components";

export const ContainerLogoMainHome = styled.section`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 2rem 12rem;
  }
`

export const Figure = styled.figure`
  width: 60%;

  > img {
    width: 100%;
  }
`

export const Aside = styled.aside`
  background: var(--gray);

  width: 50%;
`