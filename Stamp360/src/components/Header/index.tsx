import { HeaderContainer, ListContainer, TitleHeaderContainer } from "./style"
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  return (
    <HeaderContainer>
      <TitleHeaderContainer>
        <h2>Stamp<span>.360</span></h2>
      </TitleHeaderContainer>
      <ListContainer>
        {/* <li>O que fazemos</li>
        <li>Contato</li> */}
        <GiHamburgerMenu />
      </ListContainer>
    </HeaderContainer>
  )
}

export default Header