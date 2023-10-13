import logo from '../../assets/logo-1.png'
import { userData } from '../../utils/userData'
import { FooterContainer, LinkToSocialMedia, SocialMediaContainerFooter } from './style'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
  return (
    <FooterContainer>
      <figure>
        <img src={logo} alt="Logo" />
      </figure>

      <p>©️ Todos os direitos reservados</p>
      <SocialMediaContainerFooter>
        <LinkToSocialMedia to={`https://instagram.com/${userData.instagram}`} target="_blank">
          <BsInstagram />
        </LinkToSocialMedia>
        <LinkToSocialMedia to={`https://wa.me/${userData.whatsappNumber}`} target="_blank">
          <BsWhatsapp />
        </LinkToSocialMedia>
        {/* <BsFacebook /> */}
        <LinkToSocialMedia to={`mailto:${userData.emailUser}`} target="_blank">
          <SiGmail />
        </LinkToSocialMedia>
      </SocialMediaContainerFooter>
    </FooterContainer>
  )
}

export default Footer