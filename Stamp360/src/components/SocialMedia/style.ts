import { Link } from "react-router-dom"
import styled from "styled-components"

export const SocialMediaContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  padding: 0 3rem 2rem 3rem;
  
  > h3 {
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 900;
  }
  
  > div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    color: var(--gray);
    font-size: 1.7rem;

    &:hover {
      color: var(--primary-color);
    }
  }

  @media (min-width: 768px) {
    padding: 3rem 12rem;

    > div {
      gap: 2rem;
    }
  }
`

export const SocialMediaLink = styled(Link)`
  color: var(--gray);
  font-size: 1.7rem;

  transition: .2s ease;

  &:hover {
    color: var(--primary-color);
  }
`