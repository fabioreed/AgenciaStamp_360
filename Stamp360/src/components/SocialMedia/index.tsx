import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { SocialMediaContainer } from './style'

const SocialMedia = () => {

  return (
    <SocialMediaContainer>
      <h3>SOCIAL MEDIA</h3>
      <div>
        <BsInstagram />
        <BsWhatsapp />
        <BsFacebook />
        <SiGmail />
      </div>
    </SocialMediaContainer>
  )
}

export default SocialMedia