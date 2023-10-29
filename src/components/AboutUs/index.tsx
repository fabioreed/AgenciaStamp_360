import { ContentContainer, DescriptionAndBtn, Figure, ImageContainer, Main, SectionAboutUsContainer, SectionWagner, SocialMedia } from "./style"
import wagner from '../../assets/wagnerstamp.jpg'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { SocialMediaLink } from "../SocialMedia/style"
import { userData } from '../../utils/userData'

const AboutUs = () => {

  return (
    <Main>
      <SectionAboutUsContainer id='about-us'>
        <ContentContainer>
          <h2 className="hidden logo">
            O que é a <span>Stamp?</span>
          </h2>
          <p>
            A <span>Stamp</span> é uma agência de comunicação e marketing digital.<br /><br />
            Nós nascemos coma missão de <span><b>impulsionar</b></span> os seus resultados através de soluções criativas para o seu negócio.<br /><br />
            Visamos estabelecer, fortalecer e otimizar a comunicação entre você e seu público-alvo!<br /><br />
            Entendemos que cada cliente é único, por isso elaboramos estratégias personalizadas que geram resultados reais e duradouros.
          </p>
        </ContentContainer>
        <ImageContainer>
          <img
            src="https://images.pexels.com/photos/1181498/pexels-photo-1181498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Imagem mulher com notebook"
            className="hidden logo"
          />
          <div className="color-filter"></div>
        </ImageContainer>
      </SectionAboutUsContainer>
      <SectionWagner>
        <Figure>
          <img src={wagner} alt="Foto de Wagner" />
          <SocialMedia>
            <SocialMediaLink to={`https://instagram.com/${userData.instagram}`} target="_blank">
              <BsInstagram />
            </SocialMediaLink>
            <SocialMediaLink to={`https://wa.me/${userData.whatsappNumber}`} target="_blank">
              <BsWhatsapp />
            </SocialMediaLink>
            <SocialMediaLink to={`mailto:${userData.emailUser}`} target="_blank">
              <SiGmail />
            </SocialMediaLink>
          </SocialMedia>
        </Figure>
        <DescriptionAndBtn>
          <p>
            "Me chamo <span>Wagner Pereira</span> e sou consultor especializado em estratégias de crescimento para <span>pequenas</span> e <span>médias</span> empresas.
            <br /><br />
            "Em outubro de 2018, tive a honra de palestrar com o apoio do <span>Sebrae</span> e outras empresas
            sobre como transformar a crise em oportunidade, abordando temas cruciais como desemprego, falência e a abertura de novos negócios.
            <br />Minha missão é impulsionar o sucesso de negócios como o seu, oferecendo soluções personalizadas e conhecimento aprofundado.
            Vamos colaborar para superar desafios e alcançar o crescimento sustentável que você busca. 
          </p>
          <button>Entrar em contato</button>
        </DescriptionAndBtn>
      </SectionWagner>
    </Main>
  )
}

export default AboutUs