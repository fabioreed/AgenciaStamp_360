import { HeaderContainer, ListContainer, TitleHeaderContainer } from "./style"
import { BsFillCaretDownFill } from 'react-icons/bs'
import logo from '../../assets/logo-1.png'

const Header = () => {
  return (
    <HeaderContainer>
      <TitleHeaderContainer>
        <img src={logo} alt="Logo Nova" />
      </TitleHeaderContainer>
      <ListContainer>
        {/* <li>O que fazemos</li>
        <li>Contato</li> */}
        {/* <GiHamburgerMenu /> */}
        <button>Saber mais <BsFillCaretDownFill/></button>
      </ListContainer>
    </HeaderContainer>
  )
}

export default Header