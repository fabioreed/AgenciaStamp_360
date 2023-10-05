import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  background: var(--black);

  padding: 1rem 3rem;

  border-top: 1px solid rgba(255, 255, 255, 0.2);

  > figure {
    > img {
      width: 40px;
    }
  }

  > p {
    color: var(--gray);
    font-size: .6rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    padding: 5rem 12rem;

    > figure > img {
      width: 70px;
    }

    > p {
      font-size: .8rem;
    }
  }
`

export const SocialMediaContainerFooter = styled.section`
  display: flex;
  gap: .9rem;

  color: var(--gray);

  @media (min-width: 768px) {
    font-size: 1.2rem;

    gap: 2rem;
  }
`