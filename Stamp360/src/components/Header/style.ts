import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 1rem;

  background: var(--black);

  @media (min-width: 768px) {
    padding: 2rem 12rem;
  }
`

export const TitleHeaderContainer = styled.div`
  > h2 {
    color: var(--primary-color);
    font-size: 1rem;

    > span {
      color: var(--gray);
      font-style: italic;
    }
  }
`

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;

  color: var(--white);
  font-size: 1.4rem;

  > li {
    color: var(--white);
    font-size: .8rem;
  }
`