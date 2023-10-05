import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 1rem;

  background: var(--black);

  @media (min-width: 768px) {
    padding: 1rem 12rem;
  }
`

export const TitleHeaderContainer = styled.div`
  > img {
    width: 90px;
  }

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

  > button {
    display: flex;
    align-items: center;
    gap: .6rem;

    background: var(--primary-color);

    color: var(--black);

    border: 1px solid transparent;

    color: var(--black);
    font-size: 1rem;
    font-weight: 600;

    padding: .7rem 2.4rem;
    width: fit-content;

    box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.3);

    transition: .4s ease;

    border-radius: 10px;
    border: 2px solid transparent;

    &:hover {
      background-color: var(--black);

      color: var(--primary-color);

      border-radius: 16px 2px 16px 2px;
      border: 2px solid var(--primary-color);
    }
  }
`