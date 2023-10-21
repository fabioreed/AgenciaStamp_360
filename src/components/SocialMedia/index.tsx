import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { SocialMediaContainer, SocialMediaLink } from './style'
import { userData } from '../../utils/userData'

const SocialMedia = () => {

  return (
    <SocialMediaContainer>
      <h3>SOCIAL MEDIA</h3>
      <div>
        <SocialMediaLink to={`https://instagram.com/${userData.instagram}`} target="_blank">
          <BsInstagram />
        </SocialMediaLink>
        <SocialMediaLink to={`https://wa.me/${userData.whatsappNumber}`} target="_blank">
          <BsWhatsapp />
        </SocialMediaLink>
        <SocialMediaLink to={`mailto:${userData.emailUser}`} target="_blank">
          <SiGmail />
        </SocialMediaLink>
      </div>
    </SocialMediaContainer>
  )
}

export default SocialMedia