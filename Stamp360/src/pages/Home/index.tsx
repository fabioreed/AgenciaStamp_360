import Header from '../../components/Header'
import { KnowMoreBtn, MainContainer, PartnersCompanies, TitleContainer } from './style'
import sebrae from '../../assets/SEBRAE-nacional.gif'
import fortlev from '../../assets/fortlev-logo-white.png'
import { IoLogoWhatsapp } from 'react-icons/io'

const Home = () => {
  const phoneNumber = "+5571992305676"
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <>
      <Header />
      <MainContainer>
        <TitleContainer>
          <h1 className="custom-background">PRONTO PARA <span>ALAVANCAR</span> SUA EMPRESA?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam et vero, autem recusandae debitis facere culpa maiores repellendus id.</p>
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
        <section>

        </section>
      </MainContainer>
    </>
  )
}

export default Home