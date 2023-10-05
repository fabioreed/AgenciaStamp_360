import logo from '../../assets/text nova.png'
import { FooterContainer, SocialMediaContainerFooter } from './style'
import { BsInstagram, BsWhatsapp, BsFacebook } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
  return (
    <FooterContainer>
      <figure>
        <img src={logo} alt="Logo" />
      </figure>

      <p>©️ Todos os direitos reservados</p>
      <SocialMediaContainerFooter>
        <BsInstagram />
        <BsWhatsapp />
        <BsFacebook />
        <SiGmail />
      </SocialMediaContainerFooter>
    </FooterContainer>
  )
}

export default Footer