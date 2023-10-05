import Header from '../../components/Header'
import { KnowMoreBtn, MainContainer, PartnersCompanies, TitleContainer } from './style'
import sebrae from '../../assets/SEBRAE-nacional.gif'
import fortlev from '../../assets/fortlev-logo-white.png'
import { IoLogoWhatsapp } from 'react-icons/io'
import AboutUs from '../../components/AboutUs'

const Home = () => {
  const phoneNumber = "+5571992305676"
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  const observer = new IntersectionObserver((entries) => {
    entries?.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })

  const hiddenElements: any = document.querySelector('.hidden')
  hiddenElements?.forEach((el: any) => observer.observe(el))

  return (
    <>
      <Header />
      <MainContainer>
        <TitleContainer>
          <h1 className="custom-background">PRONTO PARA <span>ALAVANCAR</span> SUA EMPRESA?</h1>
          <p>Descubra como a <span>Stamp</span> pode impulsionar a sua empresa à novas alturas!</p>
          <KnowMoreBtn to={whatsappUrl} target='_blank'>
            <IoLogoWhatsapp />
            Entre em Contato
          </KnowMoreBtn>
        </TitleContainer>
        <PartnersCompanies>
          <h3>EMPRESAS QUE NOS APOIAM</h3>
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