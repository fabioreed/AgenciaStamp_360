import styled from "styled-components"

export const SectionAboutUsContainer = styled.section`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    color: var(--gray);
    font-size: 1.2rem;

    > span {
      color: var(--primary-color);
    }
  }

  > p {
    color: var(--gray);
    line-height: 150%;
    font-size: .8rem;
  }

  @media (min-width: 768px) {
    > h2 {
      font-size: 2.4rem;
    }

    > p {
      font-size: 1rem;
    }
  }
`