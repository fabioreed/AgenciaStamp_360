import Header from '../../components/Header'
import { KnowMoreBtn, MainContainer, PartnersCompanies, TitleContainer } from './style'
import sebrae from '../../assets/SEBRAE-nacional.gif'
import fortlev from '../../assets/fortlev-logo-white.png'
import { IoLogoWhatsapp } from 'react-icons/io'
import AboutUs from '../../components/AboutUs'

const Home = () => {
  const phoneNumber = "+5571992305676"
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <>
      <Header />
      <MainContainer>
        <TitleContainer>
          <h1 className="custom-background">PRONTO PARA <span>ALAVANCAR</span> SUA EMPRESA?</h1>
          <p>Descubra como a <span>Stamp</span> pode impulsionar a sua empresa à novas alturas!</p>
        </TitleContainer>
        <KnowMoreBtn to={whatsappUrl} target='_blank'>
          <IoLogoWhatsapp />
          Entre em Contato
        </KnowMoreBtn>
        <PartnersCompanies>
          <h3>Empresas que nos apoiam:</h3>
          <figure>
            <div>
              <img src={sebrae} alt="Logo do Sebrae" />
              <img src={fortlev} alt="Logo da FortLev" />
            </div>
          </figure>
        </PartnersCompanies>
        <AboutUs />
      </MainContainer>
    </>
  )
}

export default Home