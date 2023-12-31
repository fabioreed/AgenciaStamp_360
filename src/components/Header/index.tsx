import { HeaderContainer, ListContainer, TitleHeaderContainer } from "./style"
import { BsFillCaretDownFill } from 'react-icons/bs'
import logo from '../../assets/logo-1.png'
import { Button } from 'react-scroll'

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
        <Button to='about-us' spy={true} smooth={true} offset={50} duration={500}>
          Saber mais <BsFillCaretDownFill />
        </Button>
      </ListContainer>
    </HeaderContainer>
  )
}

export default Header